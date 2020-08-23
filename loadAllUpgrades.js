upgradeInfoJSON = [
  {"id":0, "name":"Harvest Upgrade Power", "cost": 1},
  {"id":1, "name":"Harvest Upgrade Power Upgrade", "cost": 15},
  {"id":2, "name":"Harvest Upgrade Crit Chance", "cost": 20},
  {"id":3, "name":"Harvest Upgrade Multi Power", "cost": 50},
  {"id":4, "name":"Harvest Upgrade Auto Clicks", "cost": 100},
  {"id":5, "name":"Harvest Upgrade Auto Click Power", "cost": 1000}
]

function loadUpgrades(array){ // should only run once when the page is first loaded
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
        break;
      case 3:
        upgrade = new HarvestUpgradePowerMulti(currentUpgrade.id, currentUpgrade.name, currentUpgrade.cost);
        allUpgrades.push(upgrade);
        break;
      case 4:
        upgrade = new HarvestUpgradeAutoClick(currentUpgrade.id, currentUpgrade.name, currentUpgrade.cost);
        allUpgrades.push(upgrade);
        break;
      case 5:
        upgrade = new HarvestUpgradeAutoClickPower(currentUpgrade.id, currentUpgrade.name, currentUpgrade.cost);
        allUpgrades.push(upgrade);
        break;1
      default:
        break;
    }
  }
  return allUpgrades;
}
