//Entities is an array of monster objects.
//Function to calculate the best target given a set of monster objects and targeting mode.
export default function target(entities, targetingMode) {
    let target = entities[0];

    switch (targetingMode) {
        //Target monster with the lowest HP.
        case "lowestHP":
            entities.forEach(element => {
                if (element.hp < target.hp) {
                    target = element;
                }
            });
            break;
        
        //Target monster with the highest HP.
        case "highestHP":
            entities.forEach(element => {
                if (element.hp > target.hp) {
                    target = element;
                }
            });
            break;
        
        //Target monster nearest to the end point.
        case "nearest":
            entities.forEach(element => {
                if (element.distance < target.distance) {
                    target = element;
                }
            });
            break;
        
        //Target monster furthest to the end point.
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

//export { target };