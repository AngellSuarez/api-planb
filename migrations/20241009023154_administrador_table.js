
exports.up = function(knex) {
  return knex.schema.createTable("administradores",function(table){
    table.increments("id").primary();
    table.string("Primernombre",30),
    table.string("PrimerApellido",30),
    table.string("correo"),
    table.string("NumDocumento",13).unique(),
    table.string("Celular",12),
    table.string("password",90)
  })
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists("administradores",true)
};
