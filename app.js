const books = require("./data/books.json");

const express = require("express");
const app = express();
const port = 3000;

app.get('/all', (req, res) => {
    res.json(books);
  });
  app.get('/first', (req, res) => {
    res.json(books[0]);
  });

  app.get('/last', (req, res) => {
    res.json(books[books.length - 1]);
  });

  app.get('/middle', (req, res) => {
    res.json(books[Math.floor(books.length / 2)]);
  });


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
