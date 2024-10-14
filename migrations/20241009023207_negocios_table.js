exports.up = function(knex){
    return knex.schema.createTable("negocios",function(table){
        table.bigIncrements("id").primary(),
        table.string("NombreNegocio"),
        table.string("Direccion"),
        table.string("Ciudad"),
        table.string("Nit"),
        table.string("RepresentanteLegal"),
        table.string("DocumentoRepresentante"),
        table.string("Telefono"),
        table.string("Correo"),
        table.string("TipoNegocio"),
        table.string("Password",90),
        table.enum("Estado",["activo","desactivado"]).defaultTo("activo")
    });
};

exports.down = function(knex){
    return knex.schema.dropTableIfExists("negocios",true)
};