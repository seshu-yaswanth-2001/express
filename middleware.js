import express from "express";

const app = express();

let count = 0;
// const middleWare = (req, res, next) => {
//   console.log("This will run every time", ++count);
//   next();
// };

// app.use(middleWare);

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.listen(3171, () => {
//   console.log("Port is running at 3171");
// });

let counter = 0;
const middleWares = (req, res, next) => {
  console.log("This will run every time", ++counter);
  next();
};

app.use(middleWares);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3171, () => {
  console.log("Port is running at 3171");
});
