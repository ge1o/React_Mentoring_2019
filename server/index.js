const express = require('express');
const { resolve } = require('path');
const logger = require('./util/logger');

const port = 8080;
const host = 'localhost';

const setup = require('./middlewares/frontMiddleware');

const app = express();

// app.use('/api', myApi);

setup(app, {
    outputPath: resolve(process.cwd(), 'build'),
    publicPath: '/',
});

app.listen(port, host, (err) => {
    if (err) {
        return logger.error(err.message);
    }
    logger.appStarted(port, host);
});