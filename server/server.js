import express from "express";
import cors from "cors";
import "dotenv/config.js";

import { notFound } from "./middlewares/index.js";
import { contactsRouter } from "./routes/api/index.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { PORT } = process.env;

app.use("/api/contacts", contactsRouter);

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
