import express from "express";
const app = express();

// const port = 3000
import "dotenv/config";
const port = process.env.PORT;

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sahil", (req, res) => {
  res.send("sahildotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login first</h1>");
});

//listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
