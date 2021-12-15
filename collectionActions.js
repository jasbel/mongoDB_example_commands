// script verify empty collection an delete
var namesCollections = db.getCollectionNames()
var countEmptyCollection = 0
var namesEmptyCollections = []
for (var index = 0; index < namesCollections.length; index++) {
    var collectName = namesCollections[index]
    var countDoc = db[collectName].find().count()
    if (countDoc === 0 ){
       countEmptyCollection = countEmptyCollection + 1 
       namesEmptyCollections.push(collectName)
       db[collectName].drop()
    }
}
countEmptyCollection
namesEmptyCollections

// show collections