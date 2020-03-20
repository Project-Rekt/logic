export default class Effect {
  constructor(name, modifier, value, time) {
    this.name = name;
    this.modifier = modifier;
    this.value = value;
    this.time = time;
  }
  attach(monster) {
    if (this.modifier == "def") {
      monster.def = this.value;
    }
    if (this.modifier == "speed") {
      monster.speed = this.value;
    }
    monster.effects.push({ name: this.name, time: this.time });
  }
}
