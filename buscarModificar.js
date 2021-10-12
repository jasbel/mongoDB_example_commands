


db.anuncio_comments.find().pretty()

adC=db.anuncio_comments.findOne()
adC._id = ObjectId("5fac0cc7e3fab80d5e199c8e")
adC.comment = "otro comentario desde consola"
db.anuncio_comments.insert(adC)

db.anuncio_comments.findOne({_id:ObjectId("60997806cdb8c90a9ccf3430")})
db.anuncio_principals.findOne({_id:ObjectId("6090226257f75a1f3859855a")})
db.anuncio_comments.updateOne({ _id:ObjectId("60997806cdb8c90a9ccf3430")}, { $set: { "puntuacion" : ObjectId("5fac0cc6e3fab80d5e199c8c"), } })
db.anuncio_comments.updateOne({ _id:ObjectId("5fac0cc7e3fab80d5e199c8d")}, { $set: { "puntuacion" : 4 } })
db.anuncio_comments.updateOne({ _id:ObjectId("5fac0cc7e3fab80d5e199c8e")}, { $set: { "puntuacion" : 3 } })
db.anuncio_comments.updateOne({ _id:ObjectId("60997806cdb8c90a9ccf3430")}, { $set: { "puntuacion" : 5 } })

db.anuncio_principals.updateOne({ _id:ObjectId("60a545af60f28e6325eafa4b")}, { $set: { "fec_fin" : "2021-12-25T14:50:16Z" } })

db.oferta_alimentos_bebidas.updateOne({ _id:ObjectId("608992c857f75a1f3859848e")}, { $set: { "hasOrder" : true } })


db.adcoin_profiles.updateOne({ _id:ObjectId("612fc511c520ed5e4c5b118f")}, { $set: { "amountCredit" : NumberDecimal("250") } })
{
  "_id" : ObjectId("5d839daa3434d6394fa4ae6b"),
  "nombre_sucursal" : "Central Cochabamba",
  "direccion" : "calle Mendez Arcos casi Plazuela Osorio",
  "telefono" : "45811010",
  "ciudad" : "Cochabamba",
  "lat_ubi" : "-17.435316",
  "lng_ubi" : "-66.165275",
  "id_empresa" : ObjectId("5d839c6c3434d6394fa4ae63"),
  "estado" : 1,
  "__v" : 0,
  "time_prog" : 15
}
db.sucursals.updateOne({ _id:ObjectId("5d839daa3434d6394fa4ae6b")}, { $set: { "lat_ubi" : "-17.435316", "lng_ubi" : "-66.165275" } })