class Player {
  constructor(money, harvestPower){
    this.money = money;
    this.harvestPower = harvestPower;
  }

  getMoney(){
    return this.money;
  }

  setMoney(money){
      this.money = money;
  }

  getHarvestPower(){
    return this.harvestPower;
  }

  setHarvestPower(value){
    this.harvestPower = value;
  }

}
