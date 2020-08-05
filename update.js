var player = new Player(0,1);
var resourceURLS = ["human.png"]
var resourceIndex = 0
var resource = new Resource(10, 0, 1, "resources/"+resourceURLS[resourceIndex])

function update(){ // update all aspects of the game
  $("#money").text(player.getMoney());
  $("#hpBar").text(resource.currentHp);
  $("#hpBar").css("width",resource.hpPercent()+"%");
}

setInterval(loop, 16)
function loop(){
  update();

}
