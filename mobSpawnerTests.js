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
        var failed = false
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
        var s = new Spawner()
        var input = []
        s.setMobs(input)
        var expected = 0
        var result = s.mobsRemaining() == expected
        return result
    }

    spawnerTest2(){
        var s = new Spawner()
        var input = []
        s.setMobs(input)
        s.spawnMobs(10.0)
        var expected = 0
        var result = s.mobsRemaining() == expected
        return result
    }

    spawnerTest3(){
        var s = new Spawner()
        var input = [[.5, 'a']]
        s.setMobs(input)
        var expected = 1
        var result = s.mobsRemaining() == expected
        return result
    }

    spawnerTest4(){
        var s = new Spawner()
        var input = [[.5, 'a']]
        s.setMobs(input)
        s.spawnMobs(.49)
        var expected = 1
        var result = s.mobsRemaining() == expected
        return result
    }

    spawnerTest5(){
        var s = new Spawner()
        var input = [[.5, 'a']]
        s.setMobs(input)
        s.spawnMobs(1)
        var expected = 0
        var result = s.mobsRemaining() == expected
        return result
    }

    spawnerTest6(){
        var s = new Spawner()
        var input = [[.5, 'a'], [1.0, 'b'], [1.5, 'c']]
        s.setMobs(input)
        s.spawnMobs(1.2)
        var expected = 1
        var result = s.mobsRemaining() == expected
        return result
    }
}

var tester = new spawnerTester()
tester.spawnerTest()
