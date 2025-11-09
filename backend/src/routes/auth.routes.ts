

import express from "express";
import { Request, Response } from "express";
import {
  signJwt,
  verifyJwt,
  loginSchema,
  registerSchema,
  forgotSchema,
  resetSchema,
  hashPassword,
  comparePassword,
  isAccountLocked,
  recordFailedLogin,
  resetFailedAttempts,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils";
import prisma from "../db/index";
import logger from "../utils/logger";

const router = express.Router();
// Use shared Prisma client from db/index
// POST /api/auth/refresh-token
router.post("/refresh-token", (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(400).json({ message: "Missing refresh token." });
  }
  const userId = verifyRefreshToken(refreshToken);
  if (!userId) {
    return res.status(401).json({ message: "Invalid refresh token." });
  }
  const token = signJwt({ id: userId });
  return res.json({ token });
});
// POST /api/auth/login
router.post("/login", async (req: Request, res: Response) => {
  const parse = loginSchema.safeParse(req.body);
  if (!parse.success) {
    logger.error(parse.error.issues[0].message);
    return res.status(400).json({ message: parse.error.issues[0].message });
  }
  const { email, password } = parse.data;
  try {
    if (isAccountLocked(email)) {
      logger.error(`Account locked for email: ${email}`);
      return res
        .status(429)
        .json({ message: "Account locked. Try again later." });
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await comparePassword(password, user.password))) {
      const locked = recordFailedLogin(email);
      logger.error(`Login failed for email: ${email}`);
      return res
        .status(401)
        .json({
          message: locked
            ? "Account locked. Try again later."
            : "Invalid credentials.",
        });
    }
    resetFailedAttempts(email);
    const token = signJwt({ id: user.id, email: user.email });
    const refreshToken = generateRefreshToken(user.id);
    return res.json({
      token,
      refreshToken,
      user: { id: user.id, email: user.email },
    });
  } catch (err) {
    logger.error(`Login error: ${err}`);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// POST /api/auth/register
router.post("/register", async (req: Request, res: Response) => {
  const parse = registerSchema.safeParse(req.body);
  if (!parse.success) {
    logger.error(parse.error.issues[0].message);
    return res.status(400).json({ message: parse.error.issues[0].message });
  }
  const { email, password } = parse.data;
  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      logger.error(`Registration failed: email already exists (${email})`);
      return res.status(409).json({ message: "Email already registered." });
    }
    const hashed = await hashPassword(password);
    const user = await prisma.user.create({
      data: { email, password: hashed },
    });
    const token = signJwt({ id: user.id, email: user.email });
    return res.json({ token, user: { id: user.id, email: user.email } });
  } catch (err) {
    logger.error(`Register error: ${err}`);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// POST /api/auth/forgot-password
router.post("/forgot-password", async (req: Request, res: Response) => {
  const parse = forgotSchema.safeParse(req.body);
  if (!parse.success) {
    logger.error(parse.error.issues[0].message);
    return res.status(400).json({ message: parse.error.issues[0].message });
  }
  const { email } = parse.data;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      logger.error(`Forgot password: email not found (${email})`);
      return res.status(404).json({ message: "Email not found." });
    }
    // TODO: Send email with reset link
    return res.json({ message: `Password reset email sent to ${email}.` });
  } catch (err) {
    logger.error(`Forgot password error: ${err}`);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// POST /api/auth/reset-password
router.post("/reset-password", async (req: Request, res: Response) => {
  const parse = resetSchema.safeParse(req.body);
  if (!parse.success) {
    logger.error(parse.error.issues[0].message);
    return res.status(400).json({ message: parse.error.issues[0].message });
  }
  const { token, newPassword } = parse.data;
  try {
    const payload = verifyJwt(token) as { id: string; email: string } | null;
    if (!payload) {
      logger.error(`Reset password: invalid or expired token`);
      return res.status(401).json({ message: "Invalid or expired token." });
    }
    await prisma.user.update({
      where: { id: payload.id },
      data: { password: newPassword },
    });
    return res.json({ message: "Password has been reset." });
  } catch (err) {
    logger.error(`Reset password error: ${err}`);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// GET /api/auth/verify-email
router.get("/verify-email", (req: Request, res: Response) => {
  // Replace with real verification logic
  return res.json({ message: "Email verified." });
});
// POST /api/auth/oauth (Google, GitHub - optional)
router.post("/oauth", (req: Request, res: Response) => {
  // Mock OAuth login
  const { provider } = req.body;
  if (!provider) {
    return res.status(400).json({ message: "Provider required." });
  }
  // Simulate OAuth success
  const token = signJwt({ id: 3, email: "oauth@example.com", provider });
  return res.json({
    token,
    user: { id: 3, email: "oauth@example.com", provider },
  });
});

export default router;
