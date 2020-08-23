class Upgrade { // base class with get method
  constructor(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  getCost(){
    return this.cost;
  }

  costIncrease(multiplier){ // parent method - overloaded at the moment in child classes
    return this.cost *= multiplier;
  }
}
// Upgrade classes each correspond to a single upgrade
class HarvestUpgradePowerPlus extends Upgrade {
  constructor(id, name, cost){
    super(id, name, cost);
    this.increment = 1;
    this.costMult = 1.5;
  }

  effect(player, value){
    player.clickIncr += value;
    player.updateHarvestPower();
  }

  costIncrease(){
    this.cost = super.costIncrease(this.costMult);
  }
}

class HarvestUpgradePowerPlusUpgrade extends Upgrade {
  constructor(id, name, cost){
    super(id, name, cost);
    this.increment = 1;
    this.costMult = 2;
  }

  effect(upgrade, value){
    upgrade.increment += this.increment;
  }

  costIncrease(){
    this.cost = super.costIncrease(this.costMult);
  }
}

class HarvestUpgradeCritChance extends Upgrade {
  constructor(id, name, cost){
    super(id, name, cost);
    this.critChance = 1;
    this.costMult = 5;
  }

  effect(player, value){
    player.setCritChance(player.getCritChance() + value);
  }

  costIncrease(){
    this.cost = super.costIncrease(this.costMult)
  }
}

class HarvestUpgradePowerMulti extends Upgrade {
  constructor(id, name, cost){
    super(id, name, cost);
    this.increment = 2;
    this.costMult = 4;
  }

  effect(player, value){
    player.clickMult *= value;
    player.updateHarvestPower();
  }

  costIncrease(){
    this.cost = super.costIncrease(this.costMult);
  }
}

class HarvestUpgradeAutoClick extends Upgrade {
  constructor(id, name, cost){
    super(id, name, cost);
    this.level = 0;
    this.maxLevel = 60;
    this.costMult = 3;
  }

  effect(player){
    this.level += 1;
    player.autoClicks = this.level;
  }

  costIncrease(){
    this.cost = super.costIncrease(this.costMult);
  }
}

class HarvestUpgradeAutoClickPower extends Upgrade {
  constructor(id, name, cost){
    super(id, name, cost);
    this.increment = 1.1; // multiply autoclick power by 1.1 -- less effective than manual clicks to encourage some active play
  }

  effect(player){
    player.autoMult *= this.increment;
  }

  costIncrease(){
    this.cost = this.cost * 1.5;
  }
}
