const express = require('express');
const morgan = require('morgan');

const app = express(); // create the http server
const port = 4000;

// middleware
app.use((req, res, next) => {
  req.secretKey = 'good day';
  console.log('inside the middleware');

  next(); // call the next piece of middleware or route handler in line
});
app.use(morgan('dev'));

// GET /about
app.get('/about', (req, res) => {
  console.log('inside the /about route handler', req.secretKey);

  if (true) {
    return res.send('find out more about us'); // first response
  }

  res.send('find out more about us'); // second response
});

// GET /contact
app.get('/contact', (req, res) => {
  res.send('contact us below');
});

// catchall
app.get('*', (req, res) => {
  res.status(404);
  res.send('this is not the page you are looking for');
});

// start the server
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
