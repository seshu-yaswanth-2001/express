import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const prodId = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  const getSinglePost = products.find((product) => product.id === prodId);
  if (getSinglePost) {
    res.json(getSinglePost);
  } else {
    res.status(404).send("product is not found! please try with different id");
  }
});

const port = 3171;
app.listen(port, () => {
  console.log("Port is listening at: ", port);
});
