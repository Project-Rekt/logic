//Class and Constructor to initiate monster object.
class monster {
    constructor(hp, speed, def, distance, x, y) {
        this.hp = hp;
        this.speed = speed;
        this.def = def;
        this.distance = distance;
        this.positionX = x;
        this.positionY = y;
    }
}

//Function to subtract health.
monster.takeDamage = function(damage) {
    this.hp -= damage;
}

//Function to add health.
monster.healDamage = function(heal) {
    this.hp += heal;
}

monster.updatePosition = function(x, y) {
    this.positionX = x;
    this.positionY = y;
}

//Function to change distance.
monster.updateDistance = function(distance) {
    this.distance = distance;
}