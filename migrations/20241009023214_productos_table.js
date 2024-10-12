exports.up = function(knex){
    return knex.schema.createTable("productos",function(table){
        table.bigIncrements("id").primary()
        table.string("Nombre"),
        table.date("FechaVencimiento"),
        table.interger("Stock").defaultTo(0),
        table.float("PrecioUnitario"),
        table.string("Descripcion"),
        table.interger("IdNegocio").unsigned();
        table.foreign("IdNegocio").references("id").inTable("negocios"),
        table.string("Estado").defaultTo("activo")
    });
}

exports.down = function(knex){
    return knex.schema.dropTableIfExists("productos",true);
}