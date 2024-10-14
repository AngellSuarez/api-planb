
exports.up = function(knex) {
  return knex.schema.createTable("detalles_ventas",function(table){
    table.bigIncrements("id").primary();
    table.bigInteger("IdVenta").unsigned();
    table.foreign("IdVenta").references("id").inTable("ventas").onDelete("CASCADE");

    table.bigInteger("IdProducto").unsigned().nullable();
    table.foreign("IdProducto").references("id").inTable("productos");

    table.bigInteger("IdServicio").unsigned().nullable();
    table.foreign("IdServicio").references("id").inTable("servicios")

    table.integer("Cantidad").defaultTo(1);
    table.float("PrecioUnitario").defaultTo(0);
    table.float("Subtotal").defaultTo(0);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("detalles_ventas",true)
};
