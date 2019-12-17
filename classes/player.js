class player {
    constructor(currency) {
        this.currency = currency;
    }
}

player.gainMoney = function(money) {
    this.currency += money;
}

player.spendMoney = function(money) {
    this.currency -= money;
}