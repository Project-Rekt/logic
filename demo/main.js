import Stage from 'engine';
import Actor from 'engine';
import InputHandler from 'engine';

import Monster from '../../logic/src/classes/monster';
import Tower from '../../logic/src/classes/tower';

class Line extends Actor {
    constructor(bounds) {
        super(bounds);
    }

    render = () => {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
    }
}

let stage = new Stage(document.querySelector('#main'));

for (let i = 0; i <= 600; i += 50) {
    stage.addActor(new Line({ x: i, y: 0, width: 1, height: 600 }));
    console.log(i);
}

for (let i = 0; i <= 600; i += 50) {
    stage.addActor(new Line({ x: 0, y: i, width: 600, height: 1 }));
    console.log(i);
}

stage.start();