
exports.up = function(knex) {
  return knex.schema.createTable("suscripciones",function(table){
    table.bigIncrements("id").primary(),
    table.bigInteger("IdUsuario").unsigned(),
    table.foreign("IdUsuario").references("id").inTable("users"),
    table.bigInteger("IdPlan").unsigned(),
    table.foreign("IdPlan").references("id").inTable("planes")
    table.timestamp("FechaInicio").defaultTo(knex.fn.now()),
    table.date("FechaExpiracion"),
    table.enum("Estado",["activo","desactivado"]).defaultTo("activo")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("suscripciones",true)
};
