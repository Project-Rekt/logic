//Class and Constructor to initiate player object.
class player {
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
}

export { player };