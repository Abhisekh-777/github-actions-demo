const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Abhisekh sahoo! GitHub Actions CI/CD Working!hope u well doing well 🚀');
});
server.listen(3000, () => console.log('Server running on port 3000'));
