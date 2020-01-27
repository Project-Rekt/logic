
import Monster from './src/classes/monster'

test('monsterTest1', () => {
    let monster = new Monster(1, 2, 3, 5, 6, 7);  
    let result = monster.getHp() == 1 && monster.getSpeed() == 2 && monster.getDef() == 3
    result = result && monster.getDistance() && monster.getPosition()[0] == 6 && monster.getPosition()[1] == 7
    expect(result).toBe(true)
})

test('monsterTest2', () => {
    let monster = new Monster(1, 2, 3, 5, 6, 7); 
    monster.takeDamage(1)
    let result = monster.getHp() == 0
    expect(result).toBe(true)
})

test('monsterTest3', () => {
    let monster = new Monster(0, 2, 3, 5, 6, 7); 
    monster.healDamage(1)
    let result = monster.getHp() == 1
    expect(result).toBe(true)
})

test('monsterTest4', () => {
    let monster = new Monster(0, 2, 3, 5, 6, 7); 
    monster.updatePosition([10, 20])
    let result = monster.getPosition()[0] == 10 && monster.getPosition()[1] == 20
    expect(result).toBe(true)
})

