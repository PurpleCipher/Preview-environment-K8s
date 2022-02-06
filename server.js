const http = require('http');

const server = (app, port) => http.createServer(app).listen(port);

module.exports = server;