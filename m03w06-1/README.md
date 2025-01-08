# M03W06 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware
- [x] Common Errors
  - [x] Address in Use
  - [x] Cannot Set Headers

server => have data
clients => want data

### Web Server
* uses HTTP
* content can include: images, videos, html, css, js, static/dynamic content

### HTTP
* Hyper Text Transfer Protocol
* built on top of TCP
* request / response protocol

### Request
* host and port
* verb => what we want to do
  * GET => I want information
  * POST => I want to send info to the server
* path => what we want to perform an action on
  * http://www.example.com/contact /about /home /login /register
* GET /home
* POST /login
* body => data that you want to send to the server
* 80 http
* 443 https
* 22 ssh
* www.youtube.com:80

### Response
* status code
  * 1xx basic internet routing
  * 2xx everything is okay
  * 3xx redirection
  * 4xx client has made an error
  * 5xx server has a problem
  * 200 okay
  * 404 page not found
  * 500 server error
* send back information of some kind


client <========== tcp/http ===========> server
response

```js
const net = require('net');

const server = net.createServer((connection) => {
  connection.write('hello world');
});

server.listen(3000);
```

```js
const http = require('http');

const server = http.createServer((request, response) => {
  response.write('hello world');
  response.end(); // sends back the response
});

server.listen(3000);
```



### Middleware
* code in the form of functions that runs between the request and the response
* parsing => turn data from one format to another

client <========== tcp/http ===========> server
                                                                                  request
                                      middleware     middleware   middleware  route handler
                                     cookie-parser   body-parser
                                    request.cookies request.body
                                        next()        next()        next()
                                              "username=alice&password=1234"
                                              { username: 'alice', password: '1234' }\\


### hard refresh
* win/linux ctrl + f5
* mac cmd + shift + r
