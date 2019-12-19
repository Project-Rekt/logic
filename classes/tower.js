//Class and Constructor to initiate tower object.
class tower {
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
}

//Function to subtract health.
tower.takeDamage = function(damage) {
    this.hp -= damage;
}

//Function to add health.
tower.healDamage = function(heal) {
    this.hp += heal;
}

//Function to change targeting mode.
tower.changeMode = function(targetingMode) {
    this.targetingMode = targetingMode;
}

//Function to change tower range.
tower.changeRange = function(range) {
    this.range = range;
}