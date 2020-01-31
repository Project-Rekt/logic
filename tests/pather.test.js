/*
 * tests that its own test method pathsEqual gives expected output
 * tests Pathing module and prints out results of tests
 */
import Pather from '../src/classes/pather'; 

function pathsEqual(p1, p2){
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

test('verifyTest1', () => {
    let a = []
    let b = []
    let result = pathsEqual(a, b)
    expect(result).toBe(true)
})

test('verifyTest2', () => {
    let a = [[0, 0]]
    let b = [[0, 0]]
    let result = pathsEqual(a, b)
    expect(result).toBe(true)
})
test('verifyTest3', () => {
    let a = [[0, 0]]
    let b = [[0, 1]]
    let result = !pathsEqual(a, b)
    expect(result).toBe(true)
})
test('verifyTest4', () => {
    let a = [[0, 0]]
    let b = [[0, 0], [0, 0]]
    let result = !pathsEqual(a, b)
    expect(result).toBe(true)
})
test('verifyTest5', () => {
    let a = [[0, 1], [2, 3], [4, 5]]
    let b = [[0, 1], [2, 3], [4, 5]]
    let result = pathsEqual(a, b)
    expect(result).toBe(true)
})


test('pathTest1', () => {
    let p = new Pather()
    let matrix = [
        [0, 1],
        [0, 2]
    ]
    let start = [0, 0]
    let expected = [[0, 0], [1, 0], [1, 1]]
    p.initializeGraph(matrix)
    let path = p.findShortestPathToEnds(start[0], start[1])
    let result = pathsEqual(path, expected)
    expect(result).toBe(true)
})
test('pathTest2', () => {
    let p = new Pather()
    let matrix = [
        [0, 1],
        [2, 2]
    ]
    let start = [0, 0]
    let expected = [[0, 0],[1, 0]]
    p.initializeGraph(matrix)
    let path = p.findShortestPathToEnds(start[0], start[1])
    let result = pathsEqual(path, expected)
    expect(result).toBe(true)
})
test('pathTest3', () => {
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
    let result = pathsEqual(path, expected)
    expect(result).toBe(true)
})

test('pathTest4', () => {
    let p = new Pather()
    let matrix = [
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [2, 0, 2, 0]
    ]
    let start = [0, 1]
    let expected = [[1, 0], [1, 1], [1, 2], [1, 3], [2, 3], [3, 3], [3, 2]]
    p.initializeGraph(matrix)
    let path = p.findShortestPathToEnds(start[0], start[1])
    let result = pathsEqual(path, expected)
    expect(result).toBe(true)
})

