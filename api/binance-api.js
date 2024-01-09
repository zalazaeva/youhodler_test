module.exports = ({ rp }) => {
    class ApiBinance {
        constructor({ baseUrl, debug = true }) {
            this.baseUrl = baseUrl;
            this.debug = debug;
        }

        send({ opts }) {
            opts = {
                ...{
                    baseUrl: this.baseUrl,
                    headers: {}
                },
                ...opts,
            }

            opts.headers['Content-Type'] = 'application/json';

            return rp(opts).then((res) => {
                if (this.debug) {
                    console.log(`response: ${res}`)
                }
                return JSON.parse(res);
            })
                .catch((err) => {
                    console.log(`error: ${err.message}`)
                    return err;
                });
        }

        async getPrice(data) {
            return this.send({
                opts: { 
                    method: 'GET',
                    uri: '/api/v3/ticker/bookTicker',
                    qs: data
                 }
            });
        }
    }

    return { ApiBinance };
};