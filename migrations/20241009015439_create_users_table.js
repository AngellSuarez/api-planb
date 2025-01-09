exports.up = function(knex){
    return knex.schema.createTable("users",function(table){
        table.bigIncrements("id").primary();
        table.string("PrimerNombre",30).NotNullable();
        table.string("SegundoNombre",30);
        table.string("PrimerApellido",30).NotNullable();
        table.string("SegundoApellido",30);
        table.string("tipDocument",["CC","TJ","CE"],2).NotNullable();
        table.string("NumDocument",12).unique().NotNullable();
        table.string("CorreoElect").NotNullable();
        table.string("Celular",15);
        table.date("Fecha_nac");
        table.string("genero",["M","F","X"],1).NotNullable();
        table.string("direccion",70).NotNullable();
        table.string("password",90).NotNullable();
        table.enum("Estado",["activo","desactivado"]).defaultTo("activo")
    });

};

exports.down = function(knex){
    return knex.schema.dropTableIfExists("users",true)
};