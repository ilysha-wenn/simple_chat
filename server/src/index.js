const config = require('./config.js');
const server = require('./server.js');
const database = require('./database.js');

database.init(config);
const app = server.init(config);
server.start(app, config);
