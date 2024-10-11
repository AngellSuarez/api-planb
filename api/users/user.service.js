const knex = require("knex")(require("../../knexfile"));

module.exports = {
    create:(data,callBack)=>{
        knex("users")
            .insert(data)
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    getAll:(callBack)=>{
        knex("users")
            .select("*")
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    getOne:(id,callBack)=>{
        knex("users")
            .where({id})
            .select("*")
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    editOne:(data,id,callBack)=>{
        knex("users")
            .where({id})
            .update(data)
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    statusChange:(id,data,callBack)=>{
        knex("users")
            .where({id})
            .update({Estado:data})
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    deleteOne:(id,callBack)=>{
        knex("users")
            .where({id})
            .delete()
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    }
}