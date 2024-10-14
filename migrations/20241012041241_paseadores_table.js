
exports.up = function(knex) {
  return knex.schema.createTable("paseadores",function(table){
    table.bigIncrements("id").primary();
    table.string("PrimerNombre",30),
    table.string("SegundoNombre",30),
    table.string("PrimerApellido",30),
    table.string("SegundoApellido",30),
    table.string("tipDocument",2),
    table.string("NumDocument",12).unique(),
    table.string("CorreoElect"),
    table.string("Celular",15)
    table.date("Fecha_nac"),
    table.string("Genero",1),
    table.string("Password",90),
    table.enum("Estado",["activo","desactivado"]).defaultTo("activo")
  })
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists("paseadores",true)
};
