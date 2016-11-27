'use strict';

const http = require('http'),
	hostname = '127.0.0.1',
	port = 1234;

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Teste do nodE');
});

server.listen(port, hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
});
