//Class and Constructor to initiate monster object.
import moveOverPath from "../functions/movement";
export default class Monster {
  constructor(hp, speed, def, distance, x, y) {
    this.hp = hp;
    this.speed = speed;
    this.def = def;
    this.distance = distance;
    this.positionX = x;
    this.positionY = y;
    this.path = [];
    this.step = 0;
    this.reachedGoal = false;
    this.dead = false;
    this.effects = [];
  }

  move(time) {
    moveOverPath(this, time);
  }

  hasReachedGoal() {
    this.reachedGoal = this.step + 1 >= this.path.length;
    return this.reachedGoal;
  }

  setPath(path) {
    this.path = path;
    this.step = 0;
  }

  setStep(step) {
    this.step = step;
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
    return this.hp;
  }
  getSpeed() {
    return this.speed;
  }
  getDef() {
    return this.def;
  }
  getDistance() {
    return this.distance;
  }
  //position given in [y, x] format
  getPosition() {
    return [this.positionY, this.positionX];
  }
  getPath() {
    return this.path;
  }
  getStep() {
    return this.step;
  }
  isDead() {
    this.dead = this.hp <= 0;
    return this.dead;
  }
}

//export { Monster };
