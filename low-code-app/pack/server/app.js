const express = require('express');
const path = require('path');
const app = express();

app.use(express.json()); // to get the info from my forms in .json format (needed for ex for create/post)

// static middleware
app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}); 

// app.use('/api', require('./api'));

// handles inexisting paths/throws an error
app.use((req, res, next) => {
  const error = Error(`page not found`);
  error.status = 404;
  next(error);
});

module.exports = app;