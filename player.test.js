import Player from './src/classes/player'

class PlayerTester{
    constructor(){

    }

    playerTest(){
        let results = [this.playerTest1(), this.playerTest2()]
        let failed = false
        for(let i = 0; i < results.length; i++)
        {
            if(!results[i]){
                failed = true
                console.log("Player module failed test " + (i+1))
            }
        }
        if (!failed){
            console.log("Player module verified")
        }
    }

    playerTest1(){
        let player = new Player(0)
        player.gainMoney(100)
        let result = player.getMoney() == 100
        return result
    }

    playerTest2(){
        let player = new Player(100)
        player.spendMoney(100)
        let result = player.getMoney() == 0
        return result
    }
}
let tester = new PlayerTester()
tester.playerTest()