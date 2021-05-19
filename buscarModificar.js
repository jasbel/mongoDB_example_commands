


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