//Class and Constructor to initiate player object.
export default class Player {
    constructor(currency) {
        this.currency = currency;
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

export { Player };