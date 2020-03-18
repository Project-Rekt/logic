//Class and Constructor to initiate player object.
export default class Player {
    constructor(health, currency) {
        this.health = health;
        this.currency = currency;
        
        this.isDead = false;
    }

    addHealth(health){
        this.health += health;
    }

    removeHealth(health){
        this.health -= health;
    }

    checkIfDead(){
        if(health <= 0){
            this.isDead = true;
        }
    }
    
    getHealth(){
        return this.health;
    }

    //Function to add money.
    gainMoney(money) {
        this.currency += money;
    }

    //Function to subtract money.
    spendMoney(money) {
        this.currency -= money;
    }

    getMoney(){
        return this.currency
    }
}

//export { Player };