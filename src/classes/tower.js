//Class and Constructor to initiate tower object.
import radius from "../functions/radius"
import target from "../functions/target"
export default class Tower {
    constructor(hp, atkspeed, atk, def, targetingMode, range, x, y) {
        this.hp = hp;
        this.atkspeed = atkspeed;
        this.atk = atk;
        this.def = def;
        this.targetingMode = targetingMode;
        this.range = range;
        this.positionX = x;
        this.positionY = y;
        this.aimAngle = 0.0
        this.shotTimer = 0.0
    }

    findTarget(allTargets){
        let subset = radius(allTargets, this)
        this.target = target(subset, this.targetingMode)
    }

    shoot(time){
        if (this.target == null || this.target.isDead()){
            //find new target
            this.shoot(time)
            return
        }
        this.shotTimer += time
        while (this.shotTimer >= this.atkspeed){
            this.shotTimer -= this.atkspeed
            this.fireBulletNoProjectile()
        }
    }

    fireBulletNoProjectile(){
        this.target.takeDamage(this.atk)
    }

    turnToTarget(target){
        let targetPosition = target.getPosition()
        let currentPosition = [this.positionY, this.positionX]
        //pointing straight up or straight down case to avoid NaN with Math.atan() function
        if (currentPosition[1] - targetPosition[1] == 0)
        {
            if (currentPosition[0] - targetPosition[0] >= 0){
                this.aimAngle = Math.PI*0.5
            }
            else{
                this.aimAngle = Math.PI*1.5
            }
        }
        //general case
        else{
            this.aimAngle = Math.atan((currentPosition[0] - targetPosition[0])/(currentPosition[1] - targetPosition[1]))
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

//export { Tower };