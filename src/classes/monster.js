//Class and Constructor to initiate monster object.
class Monster {
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

    getHp(){
        return this.hp
    }
    getSpeed(){
        return this.speed
    }
    getDef(){
        return this.def
    }
    getDistance(){
        return this.distance
    }
    getPosition(){
        return [this.positionX, this.positionY]
    }
}

export { Monster };