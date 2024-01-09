const api = require('./binance-api')({
    rp: require('request-promise')
});
const BigNumber = require('bignumber.js');
const { FREQUENCY, BASE_URL } = require('./const');

const apiBinance = new api.ApiBinance({
    baseUrl: BASE_URL,
    debug: true
});

const getPriceFromBinance = async (symbol, res) => {
    const data = {
        symbol
    };
    const resultData = await apiBinance.getPrice(data);
    const bidWithFreq = addFrequency(resultData.bidPrice);
    const askWithFreq = addFrequency(resultData.askPrice);
    const avgWithFreq = calcAvgPrice(bidWithFreq, askWithFreq)
    const result = JSON.stringify({
        bidWithFreq,
        askWithFreq,
        avgWithFreq
    })
    return res.write(`data: ${result} \n`);
}

const addFrequency = (price) => {
    const percentPrice = new BigNumber(price).multipliedBy(FREQUENCY);
    return new BigNumber(price).plus(percentPrice).toNumber()
}

const calcAvgPrice = (bidPrice, askPrice) => {
    return new BigNumber(bidPrice).plus(new BigNumber(askPrice)).dividedBy(2).toNumber()
}

module.exports = {
    getPriceFromBinance
}