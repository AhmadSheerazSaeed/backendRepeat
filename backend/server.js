import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(cookieParser()); // read cookies
app.use(express.json()); // read JSON
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api/users", userRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log(`${process.env.DB_NAME} collection connected`);
  })
  .catch((error) => {
    console.log(error.toString());
  });
