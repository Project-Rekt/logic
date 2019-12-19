//Class and Constructor to initiate player object.
class player {
    constructor(currency) {
        this.currency = currency;
    }
}

//Function to add money.
player.gainMoney = function(money) {
    this.currency += money;
}

//Function to subtract money.
player.spendMoney = function(money) {
    this.currency -= money;
}