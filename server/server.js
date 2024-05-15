import express from "express";
import cors from "cors";
import "dotenv/config.js";

import { notFound } from "./middlewares/index.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
