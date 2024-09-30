import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/Routes.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

dotenv.config();
const PORT = process.env.PORT;
const DATABASE_NAME = process.env.DATABASE_NAME;

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@projectcnpm.yorie.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log("Server running...");
});

app.use(routes);
