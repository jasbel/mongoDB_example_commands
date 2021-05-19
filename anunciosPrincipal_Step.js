Iniciando MOnogo >mongo
use social
show collections


Pasos para crear de manera manual un anuncio a la pagina principal

1 publicar, aceptar, y mandar el anuncio

2 identificar el anuncio con su id

db.anuncios.find("60881e6157f75a1f3859838f").pretty()


2.2 Ver los anuncios publicados

db.anuncio_principals.find().pretty()


/* 3 crear una nueva variable en el anuncio_principals */

<!-- var orig = db.anuncio_principals.findOne({_id:ObjectId("6082dea857f75a1f3859831g")}) -->
var orig = db.anuncio_principals.findOne({_id:"6082dea857f75a1f3859831g"})
orig._id = ObjectId("6082dea857f75a1f38598z")
orig.fec_regis = "2021-05-03T14:50:16Z"
orig.fec_in = "2021-05-19T14:50:16Z"
orig.fec_fin = "2021-05-30T14:50:16Z"
orig.n_orden = 20
orig.idanuncio = ObjectId("609022a857f75a1f38598559")
db.anuncio_principals.insert(orig)

/* 4 inserta el nuevo anuncio */

db.anuncio_principals.insert(orig)


/* 5 Verificar anuncio insertado */

db.anuncio_principals.find().pretty()

/* generic */

orig.n_orden = 15
orig._id = "6082dea857f75a1f3859831m"
orig.idanuncio = ObjectId("6090226257f75a1f38598557")
db.anuncio_principals.insert(orig)

orig.n_orden = 16
orig._id = "6082dea857f75a1f3859831n"
orig.idanuncio = ObjectId("609022a857f75a1f38598559")
db.anuncio_principals.insert(orig)

/* Segunda Version  */
var myid = ObjectId("609022a857f75a1f3859854a")

var orig = {}
orig._id = ObjectId("6090226257f75a1f3859855a")
orig.fec_regis = "2021-05-03T14:50:16Z"
orig.fec_in = "2021-05-19T14:50:16Z"
orig.fec_fin = "2021-05-30T14:50:16Z"
orig.n_orden = 20
orig.estado = 0,
orig.idanuncio = ObjectId("609022a857f75a1f38598559")
orig.__v = 0

db.anuncio_principals.insert(orig)

db.anuncio_principals.updateOne({ _id: "6082dea857f75a1f3859831n" }, { $set: { _id: ObjectId("6090226257f75a1f3859855b") } })

/* Modificar _id crear uno nuevo y eliminar el anterior */
db.anuncio_principals.find().pretty()

var orig = db.anuncio_principals.findOne({_id:"6082dea857f75a1f3859831n"})
orig._id = ObjectId("6090226257f75a1f3859855b")
db.anuncio_principals.insert(orig)
db.anuncio_principals.remove({_id:"6082dea857f75a1f3859831n"})
// db.anuncio_principals.remove({_id:ObjectId("6090226257f75a1f3859855a")})

var orig = db.anuncio_principals.findOne({_id:"6082dea857f75a1f3859831m"})
orig._id = ObjectId("6090226257f75a1f3859855c")
db.anuncio_principals.insert(orig)
db.anuncio_principals.remove({_id:"6082dea857f75a1f3859831m"})

