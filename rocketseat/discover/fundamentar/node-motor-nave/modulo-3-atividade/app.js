const getFlag = require('./getFlag')

console.log(`Salve ${getFlag.getFlag('--name')}. ${getFlag.getFlag('--greetings')}`)