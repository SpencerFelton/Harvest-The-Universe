class Player {
  constructor(money, harvestPower){
    this.money = money;
    this.baseHarvesterPower = harvestPower;
    this.clickMult = 1;
    this.clickIncr = 0;
    this.harvestPower = (this.baseHarvesterPower + this.clickIncr) * this.clickMult;
    this.critChance = 0;
    this.critDmg = 2;
    this.autoClicks = 0;
    this.autoMult = 1
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

  autoclick(counter){
    var bexf = Math.round(60/this.autoClicks); //bexf = Buy Every x Frames
    if(this.autoClicks == 0){
      //pass
    }
    else {
      if(counter%bexf == 0){
        console.log(counter);
        currentResource.setHp(this.getHarvestPower() * this.autoMult);
        if(currentResource.killed){
          $("#goRight").css("visibility", "visible");
        }
        //simulate a click and allow access to next resource
      }
    }
  }

}
