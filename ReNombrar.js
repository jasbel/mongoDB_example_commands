// todos
db.recommends.updateMany({}, { $rename: { usuario_id: "user" } });
db.recommends.updateMany({}, { $rename: { usuario_id: "user", usuario: "profile", tipo_usuario: "userType", created_at: "createdAt" } });
// db.recommends.updateMany({},{ $rename: { user: "usuario_id", profile: "usuario", userType: "tipo_usuario", createdAt: "created_at" } });

// Especifico
db.recommends.update({ _id: 1 }, { $rename: { usuario_id: "user", usuario: "profile" } });

/* Renombrar una collection */
db.anuncio_alimentos_bebidas.renameCollection("ad_fooddrinks")
db.anuncio_animales_mascotas2.renameCollection("ad_animalspets")
db.anuncio_arte_antiguedades2.renameCollection("ad_artantiques")
db.anuncio_hogar2.renameCollection("ad_homes")
db.anuncio_agro2.renameCollection("ad_agronomy")
db.ad_agronomy.renameCollection("ad_agronomys")
db.dislike_publications.renameCollection("publication_dislikes")
db.publication_likes.renameCollection("recommends")

db.anuncio_alimentos_bebidas.find()
