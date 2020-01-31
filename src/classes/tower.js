import Engine from 'engine';

//Class and Constructor to initiate tower object.
export default class Tower extends Engine.Actor {
    constructor(hp, atkspeed, atk, def, targetingMode, range, x, y) {
        super({});
        this.hp = hp;
        this.atkspeed = atkspeed;
        this.atk = atk;
        this.def = def;
        this.targetingMode = targetingMode || "nearest";
        this.range = range;
        this.positionX = x;
        this.positionY = y;
        this.aimAngle = 0.0
    }

    render = (dt) => {

    }

    update = (dt) => {

    }

    turnToTarget(target) {
        if (target == null || target.isDead()) {
            return
        }
        let targetPosition = target.getPosition()
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
    setMode(targetingMode) {
        this.targetingMode = targetingMode;
    }

    //Function to change tower range.
    setRange(range) {
        this.range = range;
    }
}
