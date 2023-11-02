const books = require("./data/books.json");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the library");
});

//1.Create a route /all to fetch all books
app.get("/all", (req, res) => {
  res.json(books);
});
//2.Create a route /first to fetch the first book
app.get("/first", (req, res) => {
  res.json(books[0]);
});
//3.Create a route /last to fetch the last book
app.get("/last", (req, res) => {
  res.json(books[books.length - 1]);
});
//4.Crate a route /middle to fetch the book in the middle (number 50 in the array)
app.get("/middle", (req, res) => {
  res.json(books[Math.floor(books.length / 2)]);
});
//5.Create a route /author/dante-alighieri to fetch ONLY THE TITLE of Dante Alighieri's book
app.get("/author/dante-alighieri", (req, res) => {
  let author = books.find((book) => book.author === "Dante Alighieri");
  res.json(author ? author.title : "No books found");
});
//6.Create a route /country/charles-dickens to fetch ONLY THE COUNTRY of Charles Dickens book
app.get("/country/charles-dickens", (req, res) => {
  res.json(books.find((book) => book.author === "Charles Dickens").country);
});
//7.Create a route /year&pages/cervantes to fetch PAGES AND YEAR of Miguel de Cervantes book, Response example: { pages: ..., year: ... }
app.get("/year&pages/cervantes", (req, res) => {
  let book = books.find((book) => book.author === "Miguel de Cervantes");
  res.json({ pages: book.pages, year: book.year });
});
//8.Create a route /country/count/spain to fetch THE NUMBER OF BOOK from Spain
app.get("/country/count/spain", (req, res) => {
  res.json(books.filter((book) => book.country === "Spain").length);
});
//9.Create a route /country/at-least/germany to fetch TRUE OR FALSE depending on if there is or not a book from Germany
app.get("/country/at-least/germany", (req, res) => {
  let countries = books.map((book) => book.country);
  res.json(countries.includes("Germany"));
});
//10.Create a route /pages/all-greater/200 to fetch TRUE OR FALSE depending on if every books contain more then 200 pages
app.get("/pages/all-greater/200", (req, res) => {
  let longBooks = books.filter((book) => book.pages > 200);
  res.json(longBooks.length === books.length);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
