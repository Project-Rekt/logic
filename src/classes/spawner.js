import sumPath from '../functions/sumPath'
import Pather from './pather'
export default class Spawner{
    constructor(y, x){
        this.x = x
        this.y = y
        this.path = null
        this.mobs = null
        this.startTime = 0.0
        this.totalDistance = 0
    }

    findPath(){
        let map  = null //request map
        let p = new Pather()
        p.initializeGraph(map)
        let path = p.findShortestPathToEnds(this.x, this.y)
        if (path == null){
            throw new Error("No path available")
        }
        this.totalDistance = sumPath(path)

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
