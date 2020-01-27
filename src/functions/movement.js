import target from "./target"

/*
 * 
 * 
 * Keep in mind that (x, y) is flipped to (y, x) due to nature of lists of lists representation
 */
export default function moveOverPath(mob, time){
    if (time == 0 || mob.hasReachedGoal()){
        return
    }
    let speed = mob.getSpeed()
    let currentPosition = mob.getPosition()
    let distanceToTravel = speed * time
    let path = mob.getPath()
    let targetPosition = path[mob.getStep()+1]
    let maximumStepDistance = Math.sqrt(Math.pow(currentPosition[1] - targetPosition[0], 2) + Math.pow(currentPosition[0] - targetPosition[1], 2))
    //snap to next position, recursive call
    if (maximumStepDistance <= distanceToTravel){
        let newDistanceToTravel = distanceToTravel - maximumStepDistance
        let newTime = newDistanceToTravel / speed
        //console.log("time = " + newTime)
        mob.setStep(mob.getStep() + 1)
        mob.updatePosition([targetPosition[1], targetPosition[0]])
        moveOverPath(mob, newTime)
        return
    }
    let xFactor = 0
    let yFactor = 0
    //all x movement
    if (currentPosition[1] - targetPosition[0] == 0){
        xFactor = distanceToTravel
        if (currentPosition[0] - targetPosition[1] > 0){
            xFactor = -xFactor
        }
    }
    //all y movement
    else if (currentPosition[0] - targetPosition[1] == 0){
        yFactor = distanceToTravel
        if (currentPosition[1] - targetPosition[0] > 0){
            yFactor = -yFactor
        }
    }
    //mixed movement
    else{
        let angle = Math.atan((currentPosition[1] - targetPosition[0])/(currentPosition[0] - targetPosition[1]))
        xFactor = distanceToTravel * Math.cos(angle)
        yFactor = distanceToTravel * Math.sin(angle)
    }
    
    let newPosition = [currentPosition[0] + xFactor, currentPosition[1] + yFactor]
    mob.updatePosition(newPosition)
    //mob.setStep(mob.getStep()+1)
}
