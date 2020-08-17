class Player {
  constructor(money, harvestPower){
    this.money = money;
    this.baseHarvesterPower = harvestPower;
    this.clickMult = 1;
    this.clickIncr = 0;
    this.harvestPower = (this.baseHarvesterPower + this.clickIncr) * this.clickMult;
    this.critChance = 0;
    this.critDmg = 2;
  }

  updateHarvestPower(){
    this.harvestPower = (this.baseHarvesterPower + this.clickIncr) * this.clickMult;
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

  rollCrit(){
    var crit = Math.floor(Math.random()*100);
    if(crit < this.critChance){
      return true;
    }
    else {
      return false;
    }
  }

}
