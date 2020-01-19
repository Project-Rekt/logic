/*
 * tests for the spawner object
 */

import { Spawner } from './src/classes/spawner';
class SpawnerTester {
    constructor(){

    }

    spawnerTest(){
let results = []
        results.push(this.spawnerTest1())
        results.push(this.spawnerTest2())
        results.push(this.spawnerTest3())
        results.push(this.spawnerTest4())
        results.push(this.spawnerTest5())
        results.push(this.spawnerTest6())
        let failed = false
        for(var i = 0; i < results.length; i++)
        {
            if(!results[i]){
                failed = true
                console.log("Spawner module failed test " + (i+1))
            }
        }
        if (!failed){
            console.log("Spawner module verified")
        }
    }

    spawnerTest1(){
        let s = new Spawner()
        let input = []
        s.setMobs(input)
        let expected = 0
        let result = s.mobsRemaining() == expected
        return result
    }

    spawnerTest2(){
        let s = new Spawner()
        let input = []
        s.setMobs(input)
        s.spawnMobs(10.0)
        let expected = 0
        let result = s.mobsRemaining() == expected
        return result
    }

    spawnerTest3(){
        let s = new Spawner()
        let input = [[.5, 'a']]
        s.setMobs(input)
        let expected = 1
        let result = s.mobsRemaining() == expected
        return result
    }

    spawnerTest4(){
        let s = new Spawner()
        let input = [[.5, 'a']]
        s.setMobs(input)
        s.spawnMobs(.49)
        let expected = 1
        let result = s.mobsRemaining() == expected
        return result
    }

    spawnerTest5(){
        let s = new Spawner()
        let input = [[.5, 'a']]
        s.setMobs(input)
        s.spawnMobs(1)
        let expected = 0
        let result = s.mobsRemaining() == expected
        return result
    }

    spawnerTest6(){
        let s = new Spawner()
        let input = [[.5, 'a'], [1.0, 'b'], [1.5, 'c']]
        s.setMobs(input)
        s.spawnMobs(1.2)
        let expected = 1
        let result = s.mobsRemaining() == expected
        return result
    }
}

let tester = new spawnerTester()
tester.spawnerTest()
