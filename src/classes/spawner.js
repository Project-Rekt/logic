export default class Spawner{
    constructor(x, y){
        this.x = x
        this.y = y
        this.path = null
        this.mobs = null
        this.startTime = 0.0
    }

    /*
     * takes a list of lists where the inner list is
     * [timing, mob]
     * the list must be sorted in order of increasing timing
     */
    setMobs(mobs){
        this.mobs = mobs
        this.startTime = 0.0
    }

    spawnMobs(deltaTime){
        this.startTime += deltaTime
        while (this.mobs.length > 0 && this.mobs[0][0] <= this.startTime){
            let toSpawn = this.mobs[0]
            //console.log(toSpawn)
            this.mobs.shift()
            //console.log(this.mobs)
            //this.spawn(toSpawn)
        }
    }

    /*
     * adds mob to world, sets coordinates to the spawner's, copies the path to the mob
     */
    spawn(mob){

    }

    mobsRemaining(){
        return this.mobs.length
    }
}

//export { Spawner };
/*
s = new Spawner(0, 0)
s.setMobs([[1, 1]])
console.log(s.mobsRemaining())
s.spawnMobs(10)
console.log(s.mobsRemaining())
*/