const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});

const dotenv = require('dotenv').config({path: path.join(__dirname, 'config.env')});

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 4000, () => console.log('server is ready'));