/*
 * Given a list of list representation of 2D coordinates
 * calculates the distance if the coordinates are visited sequentially
 * starting from the first coordinate.
 * [[0, 0], [0, 1], [1, 1]] --> 2
 */

 export default function sumPath(path){
     let total = 0
     for(let i = 1; i < path.length; i++){
        total += Math.sqrt(Math.pow(path[i-1][0] - path[i][0], 2) + Math.pow(path[i-1][1] - path[i][1], 2))
    }
     return total
 }