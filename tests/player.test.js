import Player from '../src/classes/player'


test('playerTest1', () => {
    let player = new Player(0)
    player.gainMoney(100)
    let result = player.getMoney() == 100
    expect(result).toBe(true)
})

test('playerTest2', () => {
    let player = new Player(100)
    player.spendMoney(100)
    let result = player.getMoney() == 0
    expect(result).toBe(true)
})