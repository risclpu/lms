import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/auth.routes";
import courseRoutes from "./routes/course.routes";
import userRoutes from "./routes/user.routes";
import logger from "./utils/logger";
import errorHandler from "./utils/errorHandler";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Versioned API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/users", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
