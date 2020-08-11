class Upgrade {
  constructor(name, cost, url) {
    this.name = name;
    this.cost = cost;
    this.url = url;
  }
}

class HarvestUpgradePowerPlus extends Upgrade {
  constructor(name, cost, url){
    super(name, cost, url);
    this.increment = 1;
  }

  effect(player, value){
    player.setHarvestPower(player.getHarvestPower() + value);
  }

  costIncrease(this.cost){
    this.cost = this.cost * 1.5;
  }

}
