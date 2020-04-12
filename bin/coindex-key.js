const program = require('commander');
const {set, get, remove} = require('../command/key');
program.command('set').description('set API').action(set);
program.command('get').description('show API').action(get);
program.command('remove').description('remove API').action(remove);

program.parse(process.argv);
