'use strict';

const http = require('http'),
	port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Pede 6');
});

server.listen(port,()=>{
  console.log(`Server running`);
});
