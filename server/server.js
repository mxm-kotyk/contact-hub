import express from "express";
import cors from "cors";
import logger from "morgan";
import "dotenv/config.js";

import { notFound } from "./middlewares/index.js";
import { contactsRouter } from "./routes/api/index.js";

const app = express();

const loggerFormat = app.get("env") === "development" ? "dev" : "short";

app.use(logger(loggerFormat));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { PORT } = process.env;

app.use("/api/contacts", contactsRouter);

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
