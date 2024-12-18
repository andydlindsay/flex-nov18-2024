const net = require('net');

const server = net.createServer();
const port = 65432;

const connections = [];

// listen for incoming connections
server.on('connection', (connection) => {
  console.log('someone connected!');

  // add the current connection to our list of connections
  connections.push(connection);

  // send a welcome message to the client
  connection.write('welcome to the chat room!');

  // set the encoding on the connection
  connection.setEncoding('utf-8');

  // listen for incoming messages
  connection.on('data', (data) => {
    console.log('client says:', data);

    // echo this message out to all connections
    for (const conn of connections) {
      // check that the connection is not the same one that sent the message
      if (conn !== connection) {
        conn.write(data);
      }
    }
  });
});

// start the server
server.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});
