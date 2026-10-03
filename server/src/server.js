import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, resp) => {
  resp.send("<h2>Server Started</h2>");
});

app.listen(PORT);
