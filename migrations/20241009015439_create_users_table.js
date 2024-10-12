exports.up = function(knex){
    return knex.schema.createTable("users",function(table){
        table.bigIncrements("id").primary();
        table.string("PrimerNombre",30),
        table.string("SegundoNombre",30),
        table.string("PrimerApellido",30),
        table.string("SegundoApellido",30),
        table.string("tipDocument",2),
        table.string("NumDocument",12).unique(),
        table.string("CorreoElect"),
        table.string("Celular",15)
        table.date("Fecha_nac"),
        table.string("genero",1),
        table.string("direccion",70),
        table.string("password",90),
        table.string("Estado",12,).defaultTo("activo")
    });

};

exports.down = function(knex){
    return knex.schema.dropTableIfExists("users",true)
};