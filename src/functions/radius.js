//Entities is an array of all monster objects. Tower is 1 object.
//Function to determine the set of monster objects within range of the tower.
//Equation of a circle is (x-h)^2 + (y-k)^2 = r^2
function radius(entities, tower) {
    h = tower.positionX;
    k = tower.positionY;
    let array = [];

    entities.forEach(element => {
        x = element.positionX;
        y = element.positionY;
        distance = Math.sqrt(((x - h) ** 2) + ((y - k) ** 2))
        if (distance <= tower.range) {
            array.push(element);
        };
    });

    return array;
}

export { radius };