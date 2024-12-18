const net = require('net');

const config = {
  host: 'localhost',
  port: 65432
};

const connection = net.createConnection(config);

// set the encoding on the connection object
connection.setEncoding('utf-8');

// listen for incoming messages
connection.on('data', (data) => {
  console.log('server says:', data);
});

// send a message to the server
// connection.write('it is good to be here');

// set the encoding on stdin
process.stdin.setEncoding('utf-8');

// listen for someone to type in and press enter
process.stdin.on('data', (data) => {
  // send the typed input to the server
  connection.write(data);
});
