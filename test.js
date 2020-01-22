let glob = require('glob');
let path = require('path');

let objects = {};
glob.sync('./src/**/*.js').forEach(function (file) {
    let item = require(path.resolve(file));
    objects = {
        ...objects,
        ...item,
    };
});

glob.sync('./*Tests.js').forEach(function (file) {
    let test = require(path.resolve(file));
    
});

//console.log(objects);

