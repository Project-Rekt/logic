import { Tower } from './tower';

class TowerType1 extends Tower {
    constructor(x, y) {
        this.hp = 100;
        this.atkspeed = 1;
        this.atk = 5;
        this.def = 10;
        this.targetingMode = "nearest";
        this.range = 5;
        this.positionX = x;
        this.positionY = y;
        this.cost = 150;
    }
}

export { TowerType1 };