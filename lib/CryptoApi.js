require('colors');
const axios = require('axios');
class CryptoApi {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
	}
	async getPriceData(coinOpt, curOpt) {
		try {
			const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: curOpt,
			});
			const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOpt}&convert=${curOpt}`);
			let output = '';
			res.data.forEach((coin) => {
				output += `COIN:${coin.symbol.yellow}(${coin.name.green}) | PRICE:${formatter.format(coin.price).blue} | RANK:${coin.rank.cyan}\n`;
			});
			return output;
		} catch (err) {
			errHandler(err);
		}
	}
}
const errHandler = (err) => {
	if (err.response.status === 401) {
		throw new Error('Your Api Key is Invalid');
	} else if (err.response.status === 404) {
		throw new Error('Your Api Key is not Responding');
	} else {
		throw new Error('Something is Wrong with Your Api key');
	}
};
module.exports = CryptoApi;
