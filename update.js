var player = new Player(0,1);
var resourceIndex = 0
var allResources = loadResources(resourceInfoJSON);
var allUpgrades = loadUpgrades(upgradeInfoJSON);
var updateCounter = 0;


var currentResource = allResources[resourceIndex];
function update(){ // update all aspects of the game
  currentResource = allResources[resourceIndex];
  if(currentResource.id >= 1){ // allow the player to navigate back through previous resources
    $("#goLeft").css("visibility", "visible");
  }
  else{ // if at the 1st resource, hide the left arrow
    $("#goLeft").css("visibility", "hidden");
  }

  if(currentResource.killed == false){ // only allow killed resources to display the right arrow
    $("#goRight").css("visibility", "hidden");
  }
  else {
    $("#goRight").css("visibility", "visible");
  }
  if(updateCounter == 60){
    updateCounter = 0;
  }
  player.autoclick(updateCounter); // simulate a click by the player - if 0 autoclick upgrades then does nothing
  updateResourceDisplay(currentResource);
  updateCounter += 1; // for tracking when to perform an autoclick
}

setInterval(loop, 16) // 1000 / 60 = 16, so 60 updates per second
function loop(){
  update();
}

function updatePlayerInfo(){
  $("#money").text("$" + player.getMoney());
  $("#harvestPower").text("Harvesting Power (HP): " + player.getHarvestPower());
  $("#critChance").text("Crit Chance: " + player.getCritChance() + "%");
}

function updateResourceInfo(){
  $("#resourceName").text(currentResource.name);
  $("#resourceImg").attr("src", currentResource.url);
  $("#hpValue").text(currentResource.currentHp);
  $("#hpBar").css("width",currentResource.hpPercent()+"%");
  $("#resourceDefence").text("Defence: " + currentResource.defence);
  $("#resourceReward").text("Reward: $" + currentResource.reward);
}

function updateUpgradeInfo(){
  $("#harvestPlusUpgradeCost").text("Cost: $ " + allUpgrades[0].getCost());
  $("#harvestPlusUpgradeEffect").text("+" + allUpgrades[0].increment + " to HP");

  $("#harvestPlusUpgradePlusUpgradeCost").text("Cost: $ " + allUpgrades[1].getCost());
  $("#harvestPlusUpgradePlusUpgradeEffect").text("+" + allUpgrades[1].increment + " to the Harvest Power Upgrade");

  $("#harvestCritChanceUpgradeCost").text("Cost: $ " + allUpgrades[2].getCost());
  $("#harvestCritChanceUpgradeEffect").text("+" + allUpgrades[2].critChance + " % chance to score a critical hit");

  $("#harvestMultiUpgradeCost").text("Cost: $ " + allUpgrades[3].getCost());
  $("#harvestMultiUpgradeEffect").text("x" + allUpgrades[3].increment + " multiplier to click Harvest Power");

  $("#harvestAutoClickUpgradeCost").text("Cost: $ " + allUpgrades[4].getCost() + " Level " + allUpgrades[4].level + "/" + allUpgrades[4].maxLevel);
  $("#harvestAutoClickUpgradeEffect").text("Autoclicks. Current : " + allUpgrades[4].level +"/s");

  $("#harvestAutoClickPowerUpgradeCost").text("Cost: $ " + allUpgrades[5].getCost());
  $("#harvestAutoClickPowerUpgradeEffect").text("Multiplies autoclick damage by " + allUpgrades[5].increment);
}


function updateResourceDisplay(currentResource){
  updatePlayerInfo();
  updateResourceInfo();
  updateUpgradeInfo();
}
