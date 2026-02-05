import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app: Application = express();

// connect database
connectDB();

// middleware
app.use(express.json());

// test route
app.get("/", (req: Request, res: Response) => {
  res.send("Facilitator backend running (TypeScript)");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
