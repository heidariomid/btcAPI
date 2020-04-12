const program = require('commander');
const {price} = require('../command/check');
program
	.command('price')
	.description('check price')
	.option('--coin <type>', 'add coin type', 'BTC,ETH,XRP')
	.option('--cur <currency>', 'change currency', 'USD')
	.action((cmd) => {
		price(cmd);
	});

program.parse(process.argv);
