import Monster from "./src/classes/monster"

test('moveTest1', () => {
    let monster = new Monster(1, 1, 1, 1, 0, 0);  
    let path = []
    monster.setPath(path)
    monster.move(1)
    let output = monster.getPosition()
    let expected = [0, 0]
    let result = expected[0] == output[0] && expected[1] == output[1]
    expect(result).toBe(true)
})

test('moveTest2', () => {
    let monster = new Monster(1, 1, 1, 1, 0, 0);  
    let path = [[0, 0]]
    monster.setPath(path)
    monster.move(1)
    let output = monster.getPosition()
    let expected = [0, 0]
    let result = expected[0] == output[0] && expected[1] == output[1]
    expect(result).toBe(true)
})

test('moveTest3', () => {
    let monster = new Monster(1, 1, 1, 1, 0, 0);  
    let path = [[0, 0], [0, 1]]
    monster.setPath(path)
    monster.move(10)
    let output = monster.getPosition()
    let expected = [1, 0]
    let result = expected[0] == output[0] && expected[1] == output[1]
    expect(result).toBe(true)
})

test('moveTest4', () => {
    let monster = new Monster(1, 1, 1, 1, 0, 0);  
    let path = [[0, 0], [0, 1], [0, 2]]
    monster.setPath(path)
    monster.move(.5)
    let output = monster.getPosition()
    let expected = [.5, 0]
    let result = expected[0] == output[0] && expected[1] == output[1]
    expect(result).toBe(true)
})

test('moveTest5', () => {
    let monster = new Monster(1, 1, 1, 1, 0, 0);  
    let path = [[0, 0], [0, 1], [0, 2], [0, 3]]
    monster.setPath(path)
    monster.move(2)
    let output = monster.getPosition()
    let expected = [2, 0]
    let result = expected[0] == output[0] && expected[1] == output[1]
    expect(result).toBe(true)
})

test('moveTest6', () => {
    let monster = new Monster(1, 1, 1, 1, 0, 0);  
    let path = [[0, 0], [0, 1], [0, 2], [0, 3]]
    monster.setPath(path)
    monster.move(2)
    monster.move(2)
    let output = monster.getPosition()
    let expected = [3, 0]
    let result = expected[0] == output[0] && expected[1] == output[1]
    console.log(output)
    expect(result).toBe(true)
})

test('moveTest7', () => {
    let monster = new Monster(1, 1, 1, 1, 0, 0);  
    let path = [[0, 0], [0, 1], [0, 2], [0, 3]]
    monster.setPath(path)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    let output = monster.getPosition()
    let expected = [3, 0]
    let result = expected[0] == output[0] && expected[1] == output[1]
    console.log(output)
    expect(result).toBe(true)
})

test('moveTest8', () => {
    let monster = new Monster(1, 1, 1, 1, 0, 0);  
    let path = [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]
    monster.setPath(path)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    let output = monster.getPosition()
    let expected = [0, 0]
    let result = expected[0] == output[0] && expected[1] == output[1]
    console.log(output)
    expect(result).toBe(true)
})

test('moveTest9', () => {
    let monster = new Monster(1, 1, 1, 1, 0, 0);  
    let path = [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]
    monster.setPath(path)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    monster.move(.5)
    let output = monster.getPosition()
    let expected = [0, 0]
    let result = expected[0] == output[0] && expected[1] == output[1]
    console.log(output)
    expect(result).toBe(true)
})