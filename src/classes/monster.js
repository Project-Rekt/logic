import Engine from 'engine';
import moveOverPath from "../functions/movement";
import edgePath from "../functions/edgePath";

//Class and Constructor to initiate monster object.
export default class Monster extends Engine.Actor {
    constructor(bounds, path, hp, speed, def, distance, x, y) {
        super(bounds);
        this.hp = hp;
        this.speed = speed;
        this.def = def;
        this.distance = distance;
        this.positionX = x;
        this.positionY = y;
        this.path = []
        this.step = 0
        this.reachedGoal = false
        this.dead = false

        this.speed = 5;
        this.route = edgePath(path);
        this.vertex = 0;

        this.px = this.bounds.x;
        this.px = this.bounds.y;
    }

    // Subject to change
    // render = (dt) => {
    //     //clearframe
    //     this.ctx.fillStyle = "black";
    //     this.ctx.fillRect(this.px, this.py, this.bounds.width, this.bounds.height);

    //     this.px = Math.round(this.bounds.x);
    //     this.py = Math.round(this.bounds.y);

    //     //drawframe
    //     this.ctx.fillStyle = "pink";
    //     this.ctx.fillRect(this.px, this.py, this.bounds.width, this.bounds.height);
    // }

    // update = (dt) => {
    //     //update position
    //     if (this.bounds.y < this.route[this.vertex][0] * 50) {
    //         this.bounds.y += this.speed;
    //     }
    //     else if (this.bounds.x < this.route[this.vertex][1] * 50) {
    //         this.bounds.x += this.speed;
    //     }
    //     else if (this.bounds.y == this.route[this.vertex][0] * 50 || this.bounds.x == this.route[this.vertex][1] * 50) {
    //         if (this.vertex < this.route.length - 1) {
    //             this.vertex += 1;
    //         }
    //         else {
    //             this.destroy();
    //         }
    //     }
    // }

    // destroy = (dt) => {
    //     this.stage.removeActor(this);
    // }

    move(time) {
        moveOverPath(this, time)
    }

    hasReachedGoal() {
        this.reachedGoal = this.step + 1 >= this.path.length
        return this.reachedGoal
    }

    setPath(path) {
        this.path = path
        this.step = 0
    }

    setStep(step) {
        this.step = step
    }

    //Function to subtract health.
    takeDamage(damage) {
        this.hp -= damage;
    }

    //Function to add health.
    healDamage(heal) {
        this.hp += heal;
    }

    //position given in [y, x] format
    updatePosition(position) {
        this.positionX = position[1];
        this.positionY = position[0];
    }

    //Function to change distance.
    setDistance(distance) {
        this.distance = distance;
    }

    getHp() {
        return this.hp
    }

    getSpeed() {
        return this.speed
    }

    getDef() {
        return this.def
    }

    getDistance() {
        return this.distance
    }

    //position given in [y, x] format
    getPosition() {
        return [this.positionY, this.positionX]
    }

    getPath() {
        return this.path
    }

    getStep() {
        return this.step
    }

    isDead() {
        this.dead = this.hp <= 0
        return this.dead
    }
}
