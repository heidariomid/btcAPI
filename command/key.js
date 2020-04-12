const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
require('colors');
const {isRequired} = require('../util/validation');

const key = {
	async set() {
		const keyManager = new KeyManager();
		const input = await inquirer.prompt([
			{
				type: 'input',
				name: 'key',
				message: 'ENTER API KEY'.green,
				validate: isRequired,
			},
		]);
		const key = keyManager.setKey(input.key);
		if (key) {
			console.log('API KEY SET'.blue);
		}
	},
	get() {
		try {
			const keyManager = new KeyManager();
			const key = keyManager.getKey();
			console.log('current key is :', key.yellow);
			return key;
		} catch (error) {
			console.log(error.message.red);
		}
	},
	remove() {
		try {
			const keyManager = new KeyManager();
			keyManager.deleteKey();
			console.log('key has been removed'.green);
			return;
		} catch (error) {
			console.log(error.message.red);
		}
	},
};

module.exports = key;
