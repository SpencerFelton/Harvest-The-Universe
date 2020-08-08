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
  })
});
