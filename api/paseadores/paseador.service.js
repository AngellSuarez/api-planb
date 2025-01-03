const knex = require("knex")(require("../../knexfile"));

module.exports = {
    create:(data,callBack)=>{
        knex("paseadores")
            .insert(data)
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    getAll:(callBack)=>{
        knex("paseadores")
            .select("*")
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    getOne:(id,callBack)=>{
        knex("paseadores")
            .where({id})
            .select("*")
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    editOne:(data,id,callBack)=>{
        knex("paseadores")
            .where({id})
            .update(data)
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    statusChange:(id,data,callBack)=>{
        knex("paseadores")
            .where({id})
            .update({Estado:data})
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    deleteOne:(id,callBack)=>{
        knex("paseadores")
            .where({id})
            .delete()
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    }
}