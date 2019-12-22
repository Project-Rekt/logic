//Entities is an array of monster objects.
//Function to calculate the best target given a set of monster objects and targeting mode.
function target(entities, targetingMode) {
    let target = entities[0];

    switch (targetingMode) {
        case "lowestHP":
            entities.forEach(element => {
                if (element.hp < target.hp) {
                    target = element;
                }
            });
            break;

        case "highestHP":
            entities.forEach(element => {
                if (element.hp > target.hp) {
                    target = element;
                }
            });
            break;

        case "nearest":
            entities.forEach(element => {
                if (element.distance < target.distance) {
                    target = element;
                }
            });
            break;

        case "furthest":
            entities.forEach(element => {
                if (element.distance > target.distance) {
                    target = element;
                }
            });
            break;
    }

    return target;
}

export { target };