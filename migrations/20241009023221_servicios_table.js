exports.up = function(knex){
    return knex.schema.createTable("servicios",function(table){
        table.bigIncrements("id").primary(),
        table.string("Descripcion",200),
        table.string("Nombre",60),
        table.string("PrecioUnitario").defaultTo(0),
        table.bigInteger("IdNegocio"),
        table.foreign("IdNegocio").references("id").inTable("Negocios")
        table.string("Estado").defaultTo("activo")
    });
};

exports.down = function(knex){
    return knex.schema.dropTableIfExists("servicios",true)
};