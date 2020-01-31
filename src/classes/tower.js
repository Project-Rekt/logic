import Engine from 'engine';
import radius from "../functions/radius"
import target from "../functions/target"

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
        this.shotTimer = 0.0
    }

    // Subject to change
    render = (dt) => {
        this.ctx.fillStyle = "white";
        this.ctx.font = "20px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText("T", this.positionX, this.positionY + 10);

        this.ctx.strokeStyle = "white";
        this.ctx.beginPath();
        this.ctx.arc(this.positionX, this.positionY, this.range * 50, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    update = (dt) => {

    }

    turnToTarget(target) {
        if (target == null || target.isDead()) {
            return
        }
        this.shotTimer += time
        while (this.shotTimer >= this.atkspeed) {
            this.shotTimer -= this.atkspeed
            this.fireBulletNoProjectile()
        }
    }

    fireBulletNoProjectile() {
        this.target.takeDamage(this.atk)
    }

    turnToTarget(target) {
        let targetPosition = target.getPosition()
        let currentPosition = [this.positionY, this.positionX]
        //pointing straight up or straight down case to avoid NaN with Math.atan() function
        if (currentPosition[1] - targetPosition[1] == 0) {
            if (currentPosition[0] - targetPosition[0] >= 0) {
                this.aimAngle = Math.PI * 0.5
            }
            else {
                this.aimAngle = Math.PI * 1.5
            }
        }
        //general case
        else {
            this.aimAngle = Math.atan((currentPosition[0] - targetPosition[0]) / (currentPosition[1] - targetPosition[1]))
        }
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
