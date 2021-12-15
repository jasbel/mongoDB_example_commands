/**
 * Iniciando MOnogo >mongo
  use social
  show collections
 */

// pasos para eliminar un anuncio
// 1 elimnar anuncio
db.anuncio_principals.remove({ _id: ObjectId("6080d8a09f05ab07796abee7") });
db.anuncio_principals.remove({ _id: ObjectId("6080d8a59f05ab07796abeeb") });
db.anuncio_principals.remove({ _id: ObjectId("6082dea857f75a1f3859831a") });

db.anuncio_animales_mascotas.remove({ _id: ObjectId("6172d1c6dd3f43d87f6b3825") });
// db.anuncio_comments.find().pretty()
db.pago_anuncios.remove({ _id: ObjectId("60afaa1e9f4cd71167731f97") });
db.payment_cards.remove({ _id: ObjectId("60afc9d820d9671e25bba3cd") });

/* DELETE Collections */
db.payment_cards.find().pretty();
db.paymentcards.drop();

db.adfavorite_agronomies.drop();
db.adfavorite_animalspets.drop();
db.adfavorite_autoparts.drop();
db.adfavorite_beautypersonals.drop();
db.adfavorite_electronics.drop();
db.adfavorite_experiences.drop();
db.adfavorite_fooddrinks.drop();
db.adfavorite_gametoys.drop();
db.adfavorite_properties.drop();
db.adfavorite_technicalservices.drop();
db.adfavorite_trainingsports.drop();
db.adfavorite_traveltourisms.drop();
db.adfavorite_vehicles.drop();

db.follows.drop();
db.publications.drop();
db["anuncio-servicios-medicos"].drop();

db.anuncio_comments.deleteMany({ tipo: 2 });

db.business_review_ratings.deleteMany({ nameUser: "asbel 3 apaza 3" });
