show collections

db.anuncio_principals.find().pretty()
db.anuncios.find().pretty()
db.postulacions.find().pretty()
db.postulacions.find({"preten_salarial" : 100}).pretty()
db.anuncios.find("<_id>").pretty()
db.anuncios.find("5d80faa2a41f6e533b25121b").pretty()

db.empresas.find("6081c0cf6aed391e88c39e7d").pretty()

db.anuncios.find({"titulo":/anuncio/}).pretty()
db.anuncios.find({"titulo":/anuncio/}).pretty()


db.anuncio_principals.find().pretty()
db.anuncio_principals.findOne({_id:ObjectId("6080d64d9f05ab07796abee3")})

db.anuncio_principals.find({"idanuncio":ObjectId("5f09f303d21c253e3fc55542")})



db.anuncios.findOne({_id:ObjectId("6081c0cf6aed391e88c39e7d")})
/* Busquedas Personalizadas */
db.anuncios.find({"titulo":/anuncio/}).pretty()
db.anuncio_alimentos_bebidas.find({"desc_trabajo":/pe/}).pretty()
db.anuncio_alimentos_bebidas.find({"desc_trabajo":/pe/}).pretty()
db.anuncio_alimentos_bebidas.find( {"desc_trabajo": { $regex : /pe/i } } )
db.anuncio_alimentos_bebidas.find( {"titulo": { $regex : new RegExp("pe", "i") } } )

db.anuncios.find("6082bca657f75a1f38598304").pretty()





