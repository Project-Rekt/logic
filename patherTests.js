/*
 * tests that its own test method pathsEqual gives expected output
 * tests Pathing module and prints out results of tests
 */
import { Pather } from './src/classes/pather'; 
class PathTester{
    constructor(){
    }

    pathsEqual(p1, p2){
        if (p1.length != p2.length){
            return false
        }
        for(let i = 0; i < p1.length; i++){
            if (p1[i][0] != p2[i][0] || p1[i][1] != p2[i][1]){
                return false
            }
        }
        return true
    }

    selfVerifyTest(){
        let results = []
        results.push(this.verifyTest1())
        results.push(this.verifyTest2())
        results.push(this.verifyTest3())
        results.push(this.verifyTest4())
        results.push(this.verifyTest5())
        let failed = false
        for(let i = 0; i < results.length; i++)
        {
            if(!results[i]){
                failed = true
                console.log("Pathing tester verification failed test " + (i+1))
            }
        }
        if (!failed){
            console.log("Pathing tester self verified")
        }
    }

    pathTest(){
        let results = []
        results.push(this.pathTest1())
        results.push(this.pathTest2())
        results.push(this.pathTest3())
        var failed = false
        for(let i = 0; i < results.length; i++)
        {
            if(!results[i]){
                failed = true
                console.log("Pathing module failed test " + (i+1))
            }
        }
        if (!failed){
            console.log("Pathing module verified")
        }
    }

    verifyTest1(){
        let a = []
        let b = []
        let result = this.pathsEqual(a, b)
        return result
    }

    verifyTest2(){
        let a = [[0, 0]]
        let b = [[0, 0]]
        let result = this.pathsEqual(a, b)
        return result
    }
    verifyTest3(){
        let a = [[0, 0]]
        let b = [[0, 1]]
        let result = !this.pathsEqual(a, b)
        return result
    }
    verifyTest4(){
        let a = [[0, 0]]
        let b = [[0, 0], [0, 0]]
        let result = !this.pathsEqual(a, b)
        return result
    }
    verifyTest5(){
        let a = [[0, 1], [2, 3], [4, 5]]
        let b = [[0, 1], [2, 3], [4, 5]]
        letlet result = this.pathsEqual(a, b)
        return result
    }


    pathTest1(){
        let p = new Pather()
        let matrix = [
            [0, 1],
            [0, 2]
        ]
        let start = [0, 0]
        let expected = [[0, 0], [1, 0], [1, 1]]
        p.initializeGraph(matrix)
        let path = p.findShortestPathToEnds(start[0], start[1])
        let result = this.pathsEqual(path, expected)
        return result
    }
    pathTest2(){
        let p = new Pather()
        let matrix = [
            [0, 1],
            [2, 2]
        ]
        let start = [0, 0]
        let expected = [[0, 0],[1, 0]]
        p.initializeGraph(matrix)
        let path = p.findShortestPathToEnds(start[0], start[1])
        let result = this.pathsEqual(path, expected)
        return result
    }
    pathTest3(){
        let p = new Pather()
        let matrix = [
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [2, 0, 2, 0]
        ]
        let start = [0, 0]
        let expected = [[0, 0], [1, 0], [1, 1], [1, 2], [1, 3], [2, 3], [3, 3], [3, 2]]
        p.initializeGraph(matrix)
        let path = p.findShortestPathToEnds(start[0], start[1])
        let result = this.pathsEqual(path, expected)
        return result
    }
}

let tester = new PathTester()
tester.selfVerifyTest()
tester.pathTest()
