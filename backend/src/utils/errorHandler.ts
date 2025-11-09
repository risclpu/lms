// Error handler middleware
import { Request, Response, NextFunction } from "express";
 
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? undefined : err,
  });
};

export default errorHandler;
