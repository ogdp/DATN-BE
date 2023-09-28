// * library import, file import:
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/mongodb.config.js";

// * route import:

dotenv.config();

const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// connectDB();

app.listen(port, () => {
  console.log(`Server running on the port: ${port}`);
});
