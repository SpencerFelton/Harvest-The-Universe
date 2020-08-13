$("document").ready(function(){

  $("#resourceImg").click(function(){
    console.log("slkdfj");
    currentResource.setHp(player.getHarvestPower());
    if(currentResource.killed){
      $("#goRight").css("visibility", "visible");
    }
  });

  $("#goRight").click(function(){
    resourceIndex += 1;
    currentResource = allResources[resourceIndex];
    currentResource.spawn();
  });

  $("#goLeft").click(function(){
    resourceIndex -= 1;
    currentResource = allResources[resourceIndex];
    currentResource.spawn();
  });

  $("#harvestPlusUpgrade").click(function(){
    if(player.getMoney() >= allUpgrades[0].getCost()){
      player.money -= allUpgrades[0].getCost();
      upgrade.effect(player, 1);
      upgrade.costIncrease();
    }
    else {
      console.log("no money innit");
    }
  });
});
