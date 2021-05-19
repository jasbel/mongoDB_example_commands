Iniciando MOnogo >mongo
use social
show collections

// pasos para eliminar un anuncio
// 1 elimnar anuncio
db.anuncio_principals.remove({_id:ObjectId("6080d8a09f05ab07796abee7")})
db.anuncio_principals.remove({_id:ObjectId("6080d8a59f05ab07796abeeb")})
db.anuncio_principals.remove({_id:ObjectId("6082dea857f75a1f3859831a")})
// db.anuncio_comments.find().pretty()
db.anuncio_comments.remove({_id:ObjectId("60997806cdb8c90a9ccf3430")})
