const express = require("express");
const app = express();

app.use(express.json());

const store = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to book store!",
  });
});

app.get("/books", (req, res) => {
  res.json({
    success: true,
    data: store,
  });
});

app.get("/book/:id", (req, res) => {
  const findBook = store.find((item) => item.id === parseInt(req.params.id));

  if (findBook) {
    res.status(200).json(findBook);
  } else {
    res.status(404).json({
      message: "Book not found!",
    });
  }
});

app.post("/new", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  };

  store.push(newBook);
  res.status(200).json({
    message: "Posted Success!",
  });
});

app.put("/update/:id", (req, res) => {
  const findBook = store.find((item) => item.id === parseInt(req.params.id));

  if (findBook) {
    findBook.title = req.body.title || findBook.title;

    res.status(200).json({
      message: `Book id with ${req.params.id} updated!`,
      data: findBook,
    });
  } else {
    res.status(404).json({
      message: `Book with ${req.params.id} is not found!`,
    });
  }
});

app.delete("/delete/:id", (req, res) => {
  const findIndex = store.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );

  if (findIndex !== -1) {
    const deleteBook = store.splice(findIndex, 1);

    res.status(200).json({
      message: "Book deleted success!",
      data: deleteBook[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found!",
    });
  }
});

const port = 3171;
app.listen(port, () => {
  console.log("Port is open at: ", port);
});
