class tower {
    constructor(hp, atkspeed, atk, def, targetingMode) {
        this.hp = hp;
        this.atkspeed = atkspeed;
        this.atk = atk;
        this.def = def;
        this.targetingMode = targetingMode;
    }
}

tower.takeDamage = function(damage) {
    this.hp -= damage;
}

tower.healDamage = function(heal) {
    this.hp += heal;
}

tower.changeMode = function(targetingMode) {
    this.targetingMode = targetingMode;
}