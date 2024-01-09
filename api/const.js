const PORT = process.env.PORT;
const TIMEOUT = process.env.TIMEOUT || 5000;
const FREQUENCY = process.env.FREQUENCY || 0.01;
const SYMBOL = 'BTCUSDT';

module.exports = {
    PORT,
    TIMEOUT,
    FREQUENCY,
    SYMBOL
}