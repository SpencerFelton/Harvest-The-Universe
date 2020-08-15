class Player {
  constructor(money, harvestPower){
    this.money = money;
    this.harvestPower = harvestPower;
    this.critChance = 0;
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

  getCritChance(){
    return this.critChance;
  }

  setCritChance(critChance){
    this.critChance = critChance;
  }

}
