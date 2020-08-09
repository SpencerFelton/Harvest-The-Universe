var player = new Player(0,1);
var resourceIndex = 0
var allResources = loadResources(resourceInfo);

var currentResource = allResources[resourceIndex];
function update(){ // update all aspects of the game
  currentResource = allResources[resourceIndex];
  if(currentResource.id >= 1){
    $("#goLeft").css("visibility", "visible");
  }
  else{
    $("#goLeft").css("visibility", "hidden");
  }

  if(currentResource.killed == false){
    $("#goRight").css("visibility", "hidden");
  }
  else {
    $("#goRight").css("visibility", "visible");
  }
  updateResourceDisplay(currentResource);
}

setInterval(loop, 16)
function loop(){
  update();

}


function updateResourceDisplay(currentResource){
  $("#money").text("$" + player.getMoney());
  $("#harvestPower").text("Harvesting Power: " + player.getHarvestPower());
  $("#resourceName").text(currentResource.name);
  $("#resourceImg").attr("src", currentResource.url);
  $("#hpBar").text(currentResource.currentHp);
  $("#hpBar").css("width",currentResource.hpPercent()+"%");
  $("#resourceDefence").text("Defence: " + currentResource.defence);
  $("#resourceReward").text("Reward: $" + currentResource.reward);
}
