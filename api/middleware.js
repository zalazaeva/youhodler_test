const addHeaders = (cb) => {
    cb.setHeader('Cache-Control', 'no-cache');
    cb.setHeader('Content-Type', 'text/event-stream');
    cb.setHeader('Access-Control-Allow-Origin', '*');
    cb.setHeader('Connection', 'keep-alive');
    cb.flushHeaders(); 
    return cb
}

module.exports = {
    addHeaders
};