$("document").ready(function(){

  $("#resourceImg").click(function(){
    if(player.rollCrit()){
      console.log("crit");
      console.log(player.getHarvestPower() * player.critDmg);
      currentResource.setHp(player.getHarvestPower() * player.critDmg);
    }
    else{
      currentResource.setHp(player.getHarvestPower());
    }
    if(currentResource.killed){
      $("#goRight").css("visibility", "visible");
    }
  });

  $("#goRight").click(function(){
    resourceIndex += 1;
    currentResource = allResources[resourceIndex];
    currentResource.spawn();
  });

  $("#goLeft").click(function(){ // rendering of resource is determined by current resource
    resourceIndex -= 1; // current resouce is determined by indexing an allResources array
    currentResource = allResources[resourceIndex];
    currentResource.spawn();
  });

  //onclick events for each upgrade
  $("#harvestPlusUpgrade").click(function(){
    var upgrade = allUpgrades[0]; // more convenient to assign upgrade to this nicer variable name
    if(player.getMoney() >= upgrade.getCost()){
      player.setMoney(player.getMoney() - upgrade.getCost());
      upgrade.effect(player, upgrade.increment);
      upgrade.costIncrease();
    }
    else {
      console.log("no money innit");
    }
  });

  $("#harvestPlusUpgradePlusUpgradeWrapper").click(function(){
    var upgrade = allUpgrades[1];
    if(player.getMoney() >= upgrade.getCost()){
      player.setMoney(player.getMoney() - upgrade.getCost());
      upgrade.effect(allUpgrades[0], upgrade.increment);
      upgrade.costIncrease();
    }
  });

  $("#harvestCritChanceUpgrade").click(function(){
    var upgrade = allUpgrades[2];
    if(player.getMoney() >= upgrade.getCost()){
      player.setMoney(player.getMoney() - upgrade.getCost());
      player.setCritChance(player.getCritChance() + upgrade.critChance);
      upgrade.costIncrease();
    }
  });

  $("#harvestMultiUpgrade").click(function(){
    var upgrade = allUpgrades[3];
    if(player.getMoney() >= upgrade.getCost()){
      player.setMoney(player.getMoney() - upgrade.getCost());
      upgrade.effect(player, upgrade.increment);
      upgrade.costIncrease();
    }
  });

  $("#HarvestUpgradeAutoClick").click(function(){
    var upgrade = allUpgrades[4];
    if(player.getMoney() >= upgrade.getCost()){
      player.setMoney(player.getMoney() - upgrade.getCost());
      upgrade.effect(player);
      upgrade.costIncrease();
    }
  });

  $("#HarvestUpgradeAutoClickPower").click(function(){
    var upgrade = allUpgrades[5];
    if(player.getMoney() >= upgrade.getCost()){
      player.setMoney(player.getMoney() - upgrade.getCost());
      upgrade.effect(player, upgrade.increment);
      upgrade.costIncrease();
    }
  })
});
