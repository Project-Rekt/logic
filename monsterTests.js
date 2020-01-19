
import { Monster } from './src/classes/monster'

class MonsterTester{
    constructor(){

    }
    monsterTest(){
        let results = [this.monsterTest1(), this.monsterTest2(), this.monsterTest3(), this.monsterTest4()]
        let failed = false
        for(let i = 0; i < results.length; i++)
        {
            if(!results[i]){
                failed = true
                console.log("Monster module failed test " + (i+1))
            }
        }
        if (!failed){
            console.log("Monster module verified")
        }
    }

    monsterTest1(){
        let monster = new Monster(1, 2, 3, 5, 6, 7);  
        let result = monster.getHp() == 1 && monster.getSpeed() == 2 && monster.getDef() == 3
        result = result && monster.getDistance() && monster.getPosition()[0] == 6 && monster.getPosition()[1] == 7
        return result  
    }

    monsterTest2(){
        let monster = new Monster(1, 2, 3, 5, 6, 7); 
        monster.takeDamage(1)
        let result = monster.getHp() == 0
        return result
    }

    monsterTest3(){
        let monster = new Monster(0, 2, 3, 5, 6, 7); 
        monster.healDamage(1)
        let result = monster.getHp() == 1
        return result
    }

    monsterTest4(){
        let monster = new Monster(0, 2, 3, 5, 6, 7); 
        monster.updatePosition(10, 20)
        let result = monster.getPosition()[0] == 10 && monster.getPosition()[1] == 20
        return result
    }
}

let tester = new MonsterTester()
tester.monsterTest()