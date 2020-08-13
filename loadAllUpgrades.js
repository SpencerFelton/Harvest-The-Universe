upgradeInfoJSON = [
  {"id":0, "name":"Harvest Upgrade Power", "cost": 1},
  {"id":1, "name":"Harvest Upgrade Power Upgrade", "cost": 1}
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

      default:
        break;
    }
  }
  return allUpgrades;
}
