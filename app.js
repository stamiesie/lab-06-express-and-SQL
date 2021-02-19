const express = require('express');
// backend import syntax
const cors = require('cors');


// create the app - the place to define our routes/endpoints
const app = express();

// import books data
const { books } = require('./data.js');

app.use(cors());

// define endpoint at'/' path.  This is the 'home' route
app.get('/books', (req, res) => {
    res.json({ results: books });
});

app.get('/books/:id', (req, res) => {

    const id = req.params.id;

    console.log(id);

    const selectedBook = books.find((book) => book.id === id);

    res.json({ results: selectedBook });
});

module.exports = {
    app
};