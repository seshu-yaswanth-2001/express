const express = require("express");

const app = express();

// middleWare
app.use(express.json());

// books data
const books = [
  {
    id: 1,
    title: `Book 1`,
  },
  {
    id: 2,
    title: `Book 2`,
  },
  {
    id: 3,
    title: `Book 3`,
  },
];

// intro api
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Book Store!",
  });
});

// get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// get single book
app.get("/books/:id", (req, res) => {
  let book = books.find((item) => item.id === parseInt(req.params.id));

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found!",
    });
  }
});

// post new book
app.post("/new", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  };

  books.push(newBook);
  res.status(200).json({
    message: "Posted success",
  });
});

// update existing book
app.put("/book/:id", (req, res) => {
  const findBook = books.find((item) => item.id === parseInt(req.params.id));

  if (findBook) {
    findBook.title = req.body.title || findBook.title;

    res.status(200).json({
      message: `book with id ${req.params.id} is updated!`,
      data: findBook,
    });
  } else {
    res.status(404).json({
      message: `Book ${req.params.id} is not found! Please try again`,
    });
  }
});

// delete existing book
app.delete("/delete/:id", (req, res) => {
  const findIndex = books.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );

  if (findIndex !== -1) {
    const deleteBook = books.splice(findIndex, 1);

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

const port = 3000;
app.listen(port, () => {
  console.log(`Port is started at ${port}`);
});
