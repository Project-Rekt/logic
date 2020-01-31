/*
 * tests for the spawner object
 */

import Spawner from '../src/classes/spawner';


test('spawnerTest1', () => {
    let s = new Spawner()
    let input = []
    s.setMobs(input)
    let expected = 0
    let result = s.mobsRemaining() == expected
    expect(result).toBe(true)
})

test('spawnerTest2', () => {
    let s = new Spawner()
    let input = []
    s.setMobs(input)
    s.spawnMobs(10.0)
    let expected = 0
    let result = s.mobsRemaining() == expected
    expect(result).toBe(true)
})
test('spawnerTest3', () => {
    let s = new Spawner()
    let input = [[.5, 'a']]
    s.setMobs(input)
    let expected = 1
    let result = s.mobsRemaining() == expected
    expect(result).toBe(true)
})
test('spawnerTest4', () => {
    let s = new Spawner()
    let input = [[.5, 'a']]
    s.setMobs(input)
    s.spawnMobs(.49)
    let expected = 1
    let result = s.mobsRemaining() == expected
    expect(result).toBe(true)
})
test('spawnerTest5', () => {
    let s = new Spawner()
    let input = [[.5, 'a']]
    s.setMobs(input)
    s.spawnMobs(1)
    let expected = 0
    let result = s.mobsRemaining() == expected
    expect(result).toBe(true)
})
test('spawnerTest6', () => {
    let s = new Spawner()
    let input = [[.5, 'a'], [1.0, 'b'], [1.5, 'c']]
    s.setMobs(input)
    s.spawnMobs(1.2)
    let expected = 1
    let result = s.mobsRemaining() == expected
    expect(result).toBe(true)
})
