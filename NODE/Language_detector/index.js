const franc = require('franc');
const { argv } = require('process');
const langs = require('langs');

const content = process.argv[2];

console.log(langs.where(3, franc(content)).name);
