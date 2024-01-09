const express = require('express');
const { getPriceFromBinance } = require('./api/utils');
const { addHeaders } = require('./api/middleware');
const { PORT, TIMEOUT, SYMBOL } = require('./api/const');
const app = express();

if (PORT) {
    // Start the server
    app.listen(PORT, () => {
        if (PORT)
        console.log(`Server listening on port ${PORT}`);
    });
} else {
    throw new Error('port is required')
}


app.get('/price', (req, res) => {
    addHeaders(res)

    getPriceFromBinance(SYMBOL, res);
    
    const interValID = setInterval(() => {
            return getPriceFromBinance(SYMBOL, res);
        }, TIMEOUT);

    // If client closes connection, stop sending events
    req.on('close', () => {
        console.log('connection close');
        clearInterval(interValID);
        res.statusCode = 500;
        res.end();
    });
});
