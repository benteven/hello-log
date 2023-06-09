require('log-timestamp');

const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
	  console.log(req.method, req.url, JSON.stringify(req.headers))
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end(`Hello World! You opened ${req.url}`);
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
	});
