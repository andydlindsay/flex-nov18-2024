const http = require('http');
const port = 3000;

const server = http.createServer((request, response) => {
  console.log(request.method, request.url); // GET /about

  if (request.method === 'GET' && request.url === '/about') {
    response.write('this is the about page');
  } else if (request.method === 'GET' && request.url === '/contact') {
    response.write('contact us below');
  } else {
    response.write('404 page not found');
  }

  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
