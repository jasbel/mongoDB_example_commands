// duplica y cambia los parametros
// var copy = db.anuncio_alimentos_bebidas.findOne(); duplicate only docuement
var copy = db.anuncio_alimentos_bebidas.find();
for (var i = 0; i< 17; i++){ 
    copy._id = new ObjectId(); 
    db.anuncio_animales_mascotas.insert(copy);
}

// solo duplica
db.anuncio_alimentos_bebidas.find().forEach(
  function(docs){
    docs._id = new ObjectId();
    db.anuncio_animales_mascotas.insert(docs);
})

// solo duplica
db.anuncio_alimentos_bebidas.aggregate([{ $match: {} }, { $out: "anuncio_animales_mascotas3" }])

/* Auxiliares */
db.anuncio_animales_mascotas.find();
db.anuncio_animales_mascotas.find().pretty();
db.anuncio_animales_mascotas.drop();