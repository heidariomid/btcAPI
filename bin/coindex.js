#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');
program.version(pkg.version).command('key', 'key API').command('check', 'check API').parse(process.argv);
