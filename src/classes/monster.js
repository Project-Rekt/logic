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

    //Function to subtract health.
    takeDamage(damage) {
        this.hp -= damage;
    }

    //Function to add health.
    healDamage(heal) {
        this.hp += heal;
    }

    updatePosition(x, y) {
        this.positionX = x;
        this.positionY = y;
    }

    //Function to change distance.
    updateDistance(distance) {
        this.distance = distance;
    }
}

export { monster };