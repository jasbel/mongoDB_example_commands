



db.postulacions.find({ _id: ObjectId("5e73177dd1bc91076918ef39") }).pretty()

db.postulacions.updateOne({ _id: ObjectId("5e73177dd1bc91076918ef39") }, { $set: { "estado": 1 } })
db.postulacions.updateOne({ _id: ObjectId("5e73177dd1bc91076918ef39") }, { $set: { "ranking": 33 } })
db.postulacions.updateOne({ _id: ObjectId("5e59084afe9bd76e760e08fd") }, { $set: { "ranking": 53 } })

db.anuncios.updateOne({ _id: "6081c0cf6aed391e88c39e7d" }, [{ $set: { "pagina_principal": 1 } }, { upsert: true }])

// db.anuncios.updateOne({ titulo: "mi segundo anuncio" }, { $set: { pagina_principal: 0 }  { $currentDate: { lastUpdated: true } }})

db.anuncio_principals.updateOne({ _id: ObjectId("6080d8a09f05ab07796abee7") }, { $set: { "idanuncio": ObjectId("6081ea7c57f75a1f385982f4") } })

db.anuncio_principals.updateOne({ _id: ObjectId("6080d8a59f05ab07796abeeb") }, { $set: { "idanuncio": ObjectId("6082101157f75a1f38598301") } })

db.anuncio_principals.updateOne({ _id: ObjectId("6082dea857f75a1f3859831a") }, { $set: { "idanuncio": ObjectId("6082bca657f75a1f38598304") } })

/* ### modificar todos */
db.anuncios.updateMany({}, { $set: { pagina_principal: 1 } })


/* ## Modificar anuncio, estado */
db.anuncio_alimentos_bebidas.updateOne({ _id: ObjectId("608c784d57f75a1f3859850a") }, { $set: { "estado": 2 } })

/*
db.anuncio_principals.find().pretty()
db.anuncio_principals.findOne({_id:"6082dea857f75a1f3859831b"})
*/
db.anuncio_principals.updateOne({ _id: "6082dea857f75a1f3859831k" }, { $set: { "fec_fin": "2021-05-30T14:50:16Z" } })
db.anuncio_principals.updateOne({ _id: "6082dea857f75a1f3859831l" }, { $set: { "fec_fin": "2021-05-30T14:50:16Z" } })
db.anuncio_principals.updateOne({ _id: "6082dea857f75a1f3859831m" }, { $set: { "fec_fin": "2021-05-30T14:50:16Z" } })
db.anuncio_principals.updateOne({ _id: "6082dea857f75a1f3859831n" }, { $set: { "fec_fin": "2021-05-30T14:50:16Z" } })

db.anuncio_principals.updateOne({ _id: ObjectId("6090226257f75a1f3859855a") }, { $set: { _id: ObjectId("6090226257f75a1f3859855b") } })