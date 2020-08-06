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
  updateResourceDisplay(currentResource);
}

setInterval(loop, 16)
function loop(){
  update();

}


function updateResourceDisplay(currentResource){
  $("#money").text(player.getMoney());
  $("#resourceName").text(currentResource.name);
  $("#resourceImg").attr("src", currentResource.url);
  $("#hpBar").text(currentResource.currentHp);
  $("#hpBar").css("width",currentResource.hpPercent()+"%");
  $("#resourceDefence").text(currentResource.defence);
  $("#resourceReward").text(currentResource.reward);
}
