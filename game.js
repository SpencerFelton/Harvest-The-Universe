$("document").ready(function(){

  $("#resourceImg").click(function(){
    currentResource.setHp(player.getHarvestPower());
    if(currentResource.killed){
      $("#goRight").css("visibility", "visible");
    }
  });

  $("#goRight").click(function(){
    $("#goRight").css("visibility", "hidden");
    resourceIndex += 1;
  });

  $("#goLeft").click(function(){
    resourceIndex -= 1;
  })
});
