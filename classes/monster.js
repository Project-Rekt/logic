class monster {
    constructor(hp, speed, def, distance) {
        this.hp = hp;
        this.speed = speed;
        this.def = def;
        this.distance = distance;
    }
}

monster.takeDamage = function(damage) {
    this.hp -= damage;
}

monster.healDamage = function(heal) {
    this.hp += heal;
}

monster.updateDistance = function(distance) {
    this.distance = distance;
}