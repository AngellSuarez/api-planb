exports.up = function(knex){
    return knex.schema.createTable("planes",function(table){
        table.bigIncrements("id").primary(),
        table.string("Nombre",50),
        table.string("Descripcion",150),
        table.string("TipoCobro",8),
        table.string("Precio").defaultTo(0),
        table.bigIncrement("IdNegocio"),
        table.foreign("IdNegocio").references("id").inTable("Negocios"),
        table.string("Estado").defaultTo("activo")
    });
};

exports.down = function(knex){
    return knex.schema.dropTableIfExists("planes",true)
}