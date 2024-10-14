
exports.up = function(knex) {
  return knex.schema.createTable("ventas",function(table){
    table.bigIncrements("id").primary();
    table.timestamp("FechaVenta").defaultTo(knex.fn.now());
    table.bigInteger("IdCliente").unsigned();
    table.foreign("IdCliente").references("id").inTable("users");
    table.float("Total").defaultTo(0);
    table.enum("Estado",["completado","cancelado"]).defaultTo("completado");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ventas",true)
};
