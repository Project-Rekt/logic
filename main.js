//Babel setup to use ES6 import and export.
require('babel-register')({
    presets: ['env']
});

module.exports = require('./test.js')
module.exports = require('./patherTests.js')
module.exports = require('./mobSpawnerTests.js')