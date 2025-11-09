// Account lockout logic
const failedAttempts: Record<string, { count: number; lastAttempt: number }> =
  {};
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes

export function recordFailedLogin(email: string): boolean {
  const now = Date.now();
  if (!failedAttempts[email]) {
    failedAttempts[email] = { count: 1, lastAttempt: now };
  } else {
    failedAttempts[email].count++;
    failedAttempts[email].lastAttempt = now;
  }
  return failedAttempts[email].count >= MAX_ATTEMPTS;
}

export function isAccountLocked(email: string): boolean {
  const entry = failedAttempts[email];
  if (!entry) return false;
  if (entry.count < MAX_ATTEMPTS) return false;
  return Date.now() - entry.lastAttempt < LOCKOUT_TIME;
}

export function resetFailedAttempts(email: string): void {
  delete failedAttempts[email];
}
import nodemailer from "nodemailer";
// Email verification and password reset utilities
export async function sendVerificationEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  await transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to: email,
    subject: "Verify your email",
    html: `<p>Click <a href='${process.env.FRONTEND_URL}/verify-email/${token}'>here</a> to verify your email.</p>`,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  await transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href='${process.env.FRONTEND_URL}/reset-password/${token}'>here</a> to reset your password.</p>`,
  });
}

export function generateVerificationToken(): string {
  return uuidv4();
}

export function generatePasswordResetToken(): string {
  return uuidv4();
}
import { v4 as uuidv4 } from "uuid";
// Refresh token utilities
const refreshTokens: Record<string, string> = {};

export function generateRefreshToken(userId: string): string {
  const token = uuidv4();
  refreshTokens[token] = userId;
  return token;
}

export function verifyRefreshToken(token: string): string | null {
  return refreshTokens[token] || null;
}

export function revokeRefreshToken(token: string): void {
  delete refreshTokens[token];
}
import jwt, { Secret } from "jsonwebtoken";
import { z } from "zod";
import bcrypt from "bcryptjs";
import prisma from "./db/index";
// Password hashing utilities
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

export const JWT_SECRET: Secret = process.env.JWT_SECRET || "dev-secret";

export function signJwt(payload: object, expiresIn = "1h") {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: expiresIn as any });
}

export function verifyJwt(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const forgotSchema = z.object({
  email: z.string().email(),
});

export const resetSchema = z.object({
  token: z.string(),
  newPassword: z.string().min(6),
});

// DB utility functions
export async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({ where: { email } });
}

export async function createUser(email: string, password: string) {
  return await prisma.user.create({ data: { email, password } });
}

export async function updateUserPassword(email: string, newPassword: string) {
  return await prisma.user.update({
    where: { email },
    data: { password: newPassword },
  });
}
