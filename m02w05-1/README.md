# M02W05 - Networking with TCP and HTTP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### Networking
* a series of computer are connected together
* any computer on the network can talk to any other machine
* LAN parties
* ISP

### Internet Protocol
* unique address for every computer on the internet (street address)
* IP address
  * IPv4 192.168.8.8
  * IPv6 2001:db8:3333:4444:5555:6666:7777:8888

### Port
* unique identifies a running process on the computer
* 65,535 ports to choose from
  * <1000 reserved
  * 22 SSH
  * 80 HTTP
  * 443 HTTPS
  * 5432 Postgres
  * 3000 - 8000 dev ports


192.168.8.8:3000
linkedin.com:80

### Transport Protocols
* broken into packets
* are all the same size
* 500 pieces
* header => destination and origin

### Transmission Control Protocol (TCP)
* requires a connection (three way handshake)
* any missing packets are resent 1/500 2/500
* packets are reordered on arrival
* HTTP is built on top of TCP

### User Datagram Protocol (UDP)
* connectionless
* no error correction
* packets can arrive in any order

clients => want information
servers => have information

### Event Driven Programming
* code that doesn't run on server start
* code will only run in response to particular events occurring

server.on('connection', () => {});
button.on('click', () => {});
form.on('submit', () => {});


Snek
connection.write('Move: up');
connection.write('Move: down');

