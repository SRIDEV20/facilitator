import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import conversationRoutes from "./routes/conversationRoutes";

dotenv.config();

const app: Application = express();

// connect database
connectDB();

// middleware
app.use(express.json());

// health check / test route
app.get("/", (req: Request, res: Response) => {
  res.send("Facilitator backend running (TypeScript)");
});

// auth routes
app.use("/api/auth", authRoutes);

// conversation routes (PROTECTED)
app.use("/api/conversations", conversationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
