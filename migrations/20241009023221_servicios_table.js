exports.up = function(knex){
    return knex.schema.createTable("servicios",function(table){
        table.bigIncrements("id").primary(),
        table.string("Descripcion",200),
        table.string("Nombre",60),
        table.string("PrecioUnitario").defaultTo(0),
        table.bigInteger("IdNegocio").unsigned(),
        table.foreign("IdNegocio").references("id").inTable("negocios")
        table.enum("Estado",["activo","desactivado"]).defaultTo("activo")
    });
};

exports.down = function(knex){
    return knex.schema.dropTable("servicios",true)
};