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
        for(var i = 0; i < p1.length; i++){
            if (p1[i][0] != p2[i][0] || p1[i][1] != p2[i][1]){
                return false
            }
        }
        return true
    }

    selfVerifyTest(){
        var results = []
        results.push(this.verifyTest1())
        results.push(this.verifyTest2())
        results.push(this.verifyTest3())
        results.push(this.verifyTest4())
        results.push(this.verifyTest5())
        var failed = false
        for(var i = 0; i < results.length; i++)
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
        var results = []
        results.push(this.pathTest1())
        results.push(this.pathTest2())
        results.push(this.pathTest3())
        var failed = false
        for(var i = 0; i < results.length; i++)
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
        var a = []
        var b = []
        var result = this.pathsEqual(a, b)
        return result
    }

    verifyTest2(){
        var a = [[0, 0]]
        var b = [[0, 0]]
        var result = this.pathsEqual(a, b)
        return result
    }
    verifyTest3(){
        var a = [[0, 0]]
        var b = [[0, 1]]
        var result = !this.pathsEqual(a, b)
        return result
    }
    verifyTest4(){
        var a = [[0, 0]]
        var b = [[0, 0], [0, 0]]
        var result = !this.pathsEqual(a, b)
        return result
    }
    verifyTest5(){
        var a = [[0, 1], [2, 3], [4, 5]]
        var b = [[0, 1], [2, 3], [4, 5]]
        var result = this.pathsEqual(a, b)
        return result
    }


    pathTest1(){
        var p = new Pather()
        var matrix = [
            [0, 1],
            [0, 2]
        ]
        var start = [0, 0]
        var expected = [[0, 0], [1, 0], [1, 1]]
        p.initializeGraph(matrix)
        var path = p.findShortestPathToEnds(start[0], start[1])
        var result = this.pathsEqual(path, expected)
        return result
    }
    pathTest2(){
        var p = new Pather()
        var matrix = [
            [0, 1],
            [2, 2]
        ]
        var start = [0, 0]
        var expected = [[0, 0],[1, 0]]
        p.initializeGraph(matrix)
        var path = p.findShortestPathToEnds(start[0], start[1])
        var result = this.pathsEqual(path, expected)
        return result
    }
    pathTest3(){
        var p = new Pather()
        var matrix = [
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [2, 0, 2, 0]
        ]
        var start = [0, 0]
        var expected = [[0, 0], [1, 0], [1, 1], [1, 2], [1, 3], [2, 3], [3, 3], [3, 2]]
        p.initializeGraph(matrix)
        var path = p.findShortestPathToEnds(start[0], start[1])
        var result = this.pathsEqual(path, expected)
        return result
    }
}

var tester = new PathTester()
tester.selfVerifyTest()
tester.pathTest()