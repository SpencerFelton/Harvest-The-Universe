upgradeInfoJSON = [
  {"id":0, "name":"Harvest Upgrade Power", "cost": 1},
  {"id":1, "name":"Harvest Upgrade Power Upgrade", "cost": 1},
  {"id":2, "name":"Harvest Upgrade Crit Chance", "cost": 1},
  {"id":3, "name":"Harvest Upgrade Multi Power", "cost": 1}
]

function loadUpgrades(array){
  var allUpgrades = []
  for (upgrades in array){
    var currentUpgrade = upgradeInfoJSON[upgrades];
    switch(currentUpgrade.id){
      case 0:
        var upgrade = new HarvestUpgradePowerPlus(currentUpgrade.id, currentUpgrade.name, currentUpgrade.cost);
        allUpgrades.push(upgrade);
        break;
      case 1:
        upgrade = new HarvestUpgradePowerPlusUpgrade(currentUpgrade.id, currentUpgrade.name, currentUpgrade.cost);
        allUpgrades.push(upgrade);
        break;
      case 2:
        upgrade = new HarvestUpgradeCritChance(currentUpgrade.id, currentUpgrade.name, currentUpgrade.cost);
        allUpgrades.push(upgrade);
      case 3:
        upgrade = new HarvestUpgradePowerMulti(currentUpgrade.id, currentUpgrade.name, currentUpgrade.cost);
        allUpgrades.push(upgrade)
      default:
        break;
    }
  }
  return allUpgrades;
}
