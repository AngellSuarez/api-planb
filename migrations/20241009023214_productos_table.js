exports.up = function(knex){
    return knex.schema.createTable("productos",function(table){
        table.bigIncrements("id").primary()
        table.string("Nombre",40).NotNullable(),
        table.date("FechaVencimiento"),
        table.integer("Stock").defaultTo(0),
        table.float("PrecioUnitario").NotNullable(),
        table.string("Descripcion",120),
        table.bigInteger("IdNegocio").unsigned();
        table
            .foreign("IdNegocio")
            .references("id")
            .inTable("negocios")
            .onDelete("CASCADE")
        table
            .enum("Estado",["activo","desactivado"])
            .defaultTo("activo")
    });
}

exports.down = function(knex){
    return knex.schema.dropTableIfExists("productos",true);
}