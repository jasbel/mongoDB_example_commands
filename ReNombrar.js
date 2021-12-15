// todos
db.recommends.updateMany({}, { $rename: { usuario_id: "user" } });
db.recommends.updateMany({}, { $rename: { usuario_id: "user", usuario: "profile", tipo_usuario: "userType", created_at: "createdAt" } });
// db.recommends.updateMany({},{ $rename: { user: "usuario_id", profile: "usuario", userType: "tipo_usuario", createdAt: "created_at" } });
db.ad_agronomies.updateMany({}, { $rename: { desc_trabajo: "descriptionAd" } })
db.ad_animalspets.updateMany({}, { $rename: { desc_trabajo: "descriptionAd" } })
db.ad_artantiques.updateMany({}, { $rename: { desc_trabajo: "descriptionAd" } })
db.ad_fooddrinks.updateMany({}, { $rename: { desc_trabajo: "descriptionAd" } })
db.ad_homes.updateMany({}, { $rename: { desc_trabajo: "descriptionAd" } })

// Especifico
db.recommends.update({ _id: 1 }, { $rename: { usuario_id: "user", usuario: "profile" } });

/* Renombrar una collection */
db.anuncio_alimentos_bebidas.renameCollection("ad_fooddrinks")
db.pago_anuncios.renameCollection("adorders")
db.anuncio_animales_mascotas2.renameCollection("ad_animalspets")
db.anuncio_arte_antiguedades2.renameCollection("ad_artantiques")
db.anuncio_hogar2.renameCollection("ad_homes")
db.anuncio_agro2.renameCollection("ad_agronomy")
db.ad_agronomy.renameCollection("ad_agronomys")
db.dislike_publications.renameCollection("publication_dislikes")
db.publication_likes.renameCollection("recommends")
db.ad_homes.renameCollection("ad_houses")
db.ad_agronomys.renameCollection("ad_agronomies")

db.anuncio_alimentos_bebidas.find()