import express from "express";
import cors from "cors";
import logger from "morgan";
import mongoose from "mongoose";
import "dotenv/config.js";

import { notFound, errorHandler } from "./middlewares/index.js";
import { contactsRouter } from "./routes/api/index.js";

const app = express();

const loggerFormat = app.get("env") === "development" ? "dev" : "short";

app.use(logger(loggerFormat));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use(notFound);

app.use(errorHandler);

const { PORT = 3000, DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Database connection successful`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
