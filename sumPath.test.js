import sumPath from './src/functions/sumPath'
import { TestScheduler } from 'jest'

test('sumPathTest1', () =>{
    let input = []
    let output = sumPath(input)
    let expected = 0
    let result = expected == output
    expect(result).toBe(true)
})

test('sumPathTest2', () =>{
    let input = [[1, 1]]
    let output = sumPath(input)
    let expected = 0
    let result = expected == output
    expect(result).toBe(true)
})

test('sumPathTest3', () =>{
    let input = [[0, 0], [0, 1]]
    let output = sumPath(input)
    let expected = 1
    let result = expected == output
    expect(result).toBe(true)
})

test('sumPathTest4', () =>{
    let input = [[0, 0], [0, 1], [1, 1]]
    let output = sumPath(input)
    let expected = 2
    let result = expected == output
    expect(result).toBe(true)
})