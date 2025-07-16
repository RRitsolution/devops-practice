const http = require('http');

const hostname = '0.0.0.0';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end("Jia Bhole Baba!\n");
  } else if (req.url === '/status') {
    res.end("Status: OK, App is Running!\n");
  } else {
    res.statusCode = 404;
    res.end("404 Not Found\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`✅ Server running at http://${hostname}:${port}/`);
});
