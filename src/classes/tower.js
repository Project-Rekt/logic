//Class and Constructor to initiate tower object.
class Tower {
    constructor(hp, atkspeed, atk, def, targetingMode, range, x, y) {
        this.hp = hp;
        this.atkspeed = atkspeed;
        this.atk = atk;
        this.def = def;
        this.targetingMode = targetingMode;
        this.range = range;
        this.positionX = x;
        this.positionY = y;
    }

    //Function to subtract health.
    takeDamage(damage) {
        this.hp -= damage;
    }

    //Function to add health.
    healDamage(heal) {
        this.hp += heal;
    }

    //Function to change targeting mode.
    changeMode(targetingMode) {
        this.targetingMode = targetingMode;
    }

    //Function to change tower range.
    changeRange(range) {
        this.range = range;
    }
}

export { Tower };