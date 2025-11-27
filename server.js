import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ status: "working" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});