import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

const port = 3171;
app.listen(port, () => {
  console.log("Server is running at: ", port);
});
