// todos
db.recommends.updateMany({}, { $rename: { usuario_id: "user" } });
db.recommends.updateMany({}, { $rename: { usuario: "profile", tipo_usuario: "userType", created_at: "createdAt" } });

db.recommends.updateMany({},{ $rename: { user: "usuario_id", profile: "usuario", userType: "tipo_usuario", createdAt: "created_at" } });

// Especifico
db.recommends.update({ _id: 1 }, { $rename: { usuario_id: "user", usuario: "profile" } });

/* Renombrar una collection */
db.recommends.renameCollection("publication_likes")
db.dislike_publications.renameCollection("publication_dislikes")
db.publication_likes.renameCollection("recommends")
