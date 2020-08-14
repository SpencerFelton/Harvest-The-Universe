class Upgrade { // base class with get method
  constructor(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  getCost(){
    return this.cost;
  }
}
// Upgrade classes each correspond to a single upgrade
class HarvestUpgradePowerPlus extends Upgrade {
  constructor(id, name, cost){
    super(id, name, cost);
    this.increment = 1;
  }

  effect(player, value){
    player.setHarvestPower(player.getHarvestPower() + value);
  }

  costIncrease(){
    this.cost = this.cost * 1.5;
  }
}

class HarvestUpgradePowerPlusUpgrade extends Upgrade {
  constructor(id, name, cost){
    super(id, name, cost);
    this.increment = 1;
  }

  effect(upgrade, value){
    upgrade.increment += this.increment;
  }

  costIncrease(){
    this.cost = this.cost * 1.5;
  }
}

class HarvestUpgradePowerMulti extends Upgrade {
  constructor(id, name, cost){
    super(id, name, cost);
    this.increment = 2;
  }

  effect(player, value){
    player.setHarvestPower(player.getHarvestPower() *= value);
  }


}
