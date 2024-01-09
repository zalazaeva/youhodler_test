const PORT = process.env.PORT;
const TIMEOUT = process.env.TIMEOUT || 5000;
const FREQUENCY = process.env.FREQUENCY || 0.01;
const SYMBOL = 'BTCUSDT';
const BASE_URL = 'https://data-api.binance.vision';

module.exports = {
    PORT,
    TIMEOUT,
    FREQUENCY,
    SYMBOL,
    BASE_URL
}