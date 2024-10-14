exports.up = function(knex){
    return knex.schema.createTable("planes",function(table){
        table.bigIncrements("id").primary(),
        table.string("Nombre",50),
        table.string("Descripcion",150),
        table.enum("TipoCobro",["mensual","anual"]).defaultTo("mensual"),
        table.float("Precio").defaultTo(0),
        table.bigInteger("IdNegocio").unsigned(),
        table.foreign("IdNegocio").references("id").inTable("negocios"),
        table.enum("Estado",["activo","desactivado"]).defaultTo("activo")
    });
};

exports.down = function(knex){
    return knex.schema.dropTableIfExists("planes",true)
}