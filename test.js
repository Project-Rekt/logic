import { player } from './src/classes/player';
import { monster } from './src/classes/monster';
import { tower } from './src/classes/tower';
import { target } from './src/functions/target';
import { radius } from './src/functions/radius';

//targetingMode = lowestHP, highestHP, nearest, furthest
let user = new player(100);

console.log(user.currency);

let monster1 = new monster(10, 0, 0, 6, 3, 0);
let monster2 = new monster(20, 0, 0, 5, 1, 2);
let monster3 = new monster(15, 0, 0, 2, 4, 2);
let monster4 = new monster(5, 0, 0, 3, 2, 3);
let monster5 = new monster(12, 0, 0, 1, 3, 4);

let turret1 = new tower(0, 0, 0, 0, "lowestHP", 2, 2, 2);
let turret2 = new tower(0, 0, 0, 0, "highestHP", 2, 2, 2);
let turret3 = new tower(0, 0, 0, 0, "nearest", 2, 2, 2);
let turret4 = new tower(0, 0, 0, 0, "furthest", 2, 2, 2);

let array = [monster1, monster2, monster3, monster4, monster5];

console.log(target(array, turret1.targetingMode));
console.log(target(array, turret2.targetingMode));
console.log(target(array, turret3.targetingMode));
console.log(target(array, turret4.targetingMode));