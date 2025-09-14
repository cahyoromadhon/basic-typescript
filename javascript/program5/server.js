// Import HTTP Module
const http = require('http');

// Create a Server
const server = http.createServer((request, response) => {
    // Send a Response
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    response.end('🏃🏻‍➡️🚉🍿📺🎞️🥺💔😭😭🍿🥤')
})

// Listen on a Port
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})