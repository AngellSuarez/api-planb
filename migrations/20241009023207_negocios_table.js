exports.up = function(knex){
    return knex.schema.createTable("negocios",function(table){
        
    })
};

exports.down = function(knex){
    return knex.schema.droptableIfExists("negocios",true)
};