module.exports.init = (config, database) => {
    try {
        const express = require('express');
        const cors = require('cors');
        const bodyParser = require('body-parser');

        const app = express();

        app.use(express.json());
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        const rooms = require('./room/index');
        app.use('/', rooms);
        const auth = require('./entity/user/router');
        app.use('/', auth);

        const errHandler = require('./middleware/error');
        app.use(errHandler);
        return app;
    } catch (error) {
        console.log('Нельзя инициализировать сервер.. ', error);
        throw error;
    }
}

module.exports.start = async(app, config) => {
    const port = config.server.PORT;
    try {
        await app.listen(port);
        console.log(`Сервер запущен  http://localhost:${port}`);
    } catch (error) {
        console.log(`Нельзя запустить сервер на ${port} ошибка: ${error}`);
        throw error;
    }
}