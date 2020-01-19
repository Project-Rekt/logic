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

console.log(objects);

//targetingMode = lowestHP, highestHP, nearest, furthest
let user = new objects.Player(100);

console.log(user.currency);

let monster1 = new objects.Monster(10, 0, 0, 6, 3, 0);
let monster2 = new objects.Monster(20, 0, 0, 5, 1, 2);
let monster3 = new objects.Monster(15, 0, 0, 2, 4, 2);
let monster4 = new objects.Monster(5, 0, 0, 3, 2, 3);
let monster5 = new objects.Monster(12, 0, 0, 1, 3, 4);

let turret1 = new objects.Tower(0, 0, 0, 0, "lowestHP", 2, 2, 2);
let turret2 = new objects.Tower(0, 0, 0, 0, "highestHP", 2, 2, 2);
let turret3 = new objects.Tower(0, 0, 0, 0, "nearest", 2, 2, 2);
let turret4 = new objects.Tower(0, 0, 0, 0, "furthest", 2, 2, 2);

let array = [monster1, monster2, monster3, monster4, monster5];

console.log(objects.target(array, turret1.targetingMode));
console.log(objects.target(array, turret2.targetingMode));
console.log(objects.target(array, turret3.targetingMode));
console.log(objects.target(array, turret4.targetingMode));