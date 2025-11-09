// Permission-based access control middleware
export function permit(...permissions: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.permissions) {
      return res.status(403).json({ message: "Forbidden: no permissions." });
    }
    const hasPermission = permissions.every((p) =>
      req.user.permissions.includes(p)
    );
    if (!hasPermission) {
      return res
        .status(403)
        .json({ message: "Forbidden: insufficient permissions." });
    }
    next();
  };
}
// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils";

// Authentication middleware: verifies JWT and attaches user to req
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or invalid token." });
  }
  const token = authHeader.split(" ")[1];
  const payload = verifyJwt(token);
  if (!payload || typeof payload === "string") {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
  req.user = payload as any;
  next();
}

// Role-based authorization middleware
export function authorize(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: insufficient role." });
    }
    next();
  };
}
