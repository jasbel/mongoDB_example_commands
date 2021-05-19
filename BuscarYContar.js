db.cvs.find("5e381a141c16881231948da8").pretty()

db.experiencias.find({id_cv : ObjectId("5e381a141c16881231948da8")}).count()
db.habilidads.find({id_cv : ObjectId("5e381a141c16881231948da8")}).count()
db.referencias.find({id_cv : ObjectId("5e381a141c16881231948da8")}).count()

db.referencias.find({id_cv : ObjectId("5e381a141c16881231948da8")}).count()

db.postulacions.find({ id_anuncio: ObjectId("6090219657f75a1f3859854d") })