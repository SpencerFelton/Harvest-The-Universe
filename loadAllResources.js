var resourceLocation = "resources/"

resourceInfoJSON = [
  {"id":0, "name":"Man", "hp":10, "defence":0, "reward":1, "url":resourceLocation+"human.png"},
  {"id":1, "name":"Long Man", "hp":100, "defence":1, "reward":5, "url":resourceLocation+"slinkyHuman.png"},
  {"id":2, "name":"Longest Man", "hp":1000, "defence":1, "reward":10, "url":resourceLocation+"longestBoi.png"},
  {"id":3, "name":"Buff Fella", "hp":10000, "defence":1, "reward":100, "url":resourceLocation+"legDay.png"}
]

function loadResources(array){
  var allResources = []
  for (var i = 0; i < array.length; i++){
    var resource = new Resource(array[i].id, array[i].name, array[i].hp, array[i].defence, array[i].reward, array[i].url)
    allResources.push(resource)
  }
  return allResources;
}
