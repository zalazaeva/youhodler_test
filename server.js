const express = require('express');
const { PORT } = require('./api/const');
const app = express();

if (PORT) {
    app.listen(PORT, () => {
        if (PORT)
        console.log(`Server listening on port ${PORT}`);
    });
} else {
    throw new Error('port is required')
}

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Connection', 'keep-alive');
    next();
  });

const router = require('./routes');
app.use('/price', router);

app.use(function(req, res, next) {
    res.statusCode = 404;
    next('Not Found');
});