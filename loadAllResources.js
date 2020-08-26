var resourceLocation = "resources/"

resourceInfoJSON = [
  {"id":0, "name":"Man", "hp":10, "defence":0, "reward":1, "url":resourceLocation+"human.png"},
  {"id":1, "name":"Long Man", "hp":100, "defence":1, "reward":5, "url":resourceLocation+"slinkyHuman.png"},
  {"id":2, "name":"Longest Man", "hp":250, "defence":5, "reward":10, "url":resourceLocation+"longestBoi.png"},
  {"id":3, "name":"Buff Fella", "hp":1000, "defence":10, "reward":100, "url":resourceLocation+"legDay.png"},
  {"id":4, "name":"Smol Tree", "hp":2000, "defence":50, "reward":150, "url":resourceLocation+"tree.png"}
]

function loadResources(array){ // create Resource objects from an array of json objects, returns an array of Resources
  var allResources = []
  for (var i = 0; i < array.length; i++){
    var resource = new Resource(array[i].id, array[i].name, array[i].hp, array[i].defence, array[i].reward, array[i].url)
    allResources.push(resource)
  }
  return allResources;
}
