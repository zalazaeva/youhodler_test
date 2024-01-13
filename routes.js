const router = require('express').Router();
const { getPriceFromBinance } = require('./api/utils');
const { TIMEOUT, SYMBOL } = require('./api/const');

router.route('/')
      .get((req, res) => {
        getPriceFromBinance(SYMBOL, res);
        
        const interValID = setInterval(() => {
                return getPriceFromBinance(SYMBOL, res);
            }, TIMEOUT);
    
        req.on('close', () => {
            console.log('connection close');
            clearInterval(interValID);
            res.end();
        });
    });

module.exports = router;