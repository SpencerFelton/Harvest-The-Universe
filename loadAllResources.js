var resourceLocation = "resources/"
resourceInfo = [
  [0, "Man", 10, 0, 1, resourceLocation+"human.png"],
  [1, "Long Man", 100, 1, 5, resourceLocation+"slinkyHuman.png"],
  [2, "Longest Man", 1000, 1, 10, resourceLocation+"longestBoi.png"]
]

function loadResources(array){
  var allResources = []
  console.log(array.length);
  for (var i = 0; i < array.length; i++){
    var resource = new Resource(array[i][0], array[i][1], array[i][2], array[i][3], array[i][4], array[i][5])
    allResources.push(resource)
  }
  return allResources;
}
