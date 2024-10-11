const knex = require("knex")(require("../../knexfile"));

module.exports = {

    createAdmin:(data,callBack)=>{
        knex("administradores")
            .insert(data)
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    getAllAdmin:(callBack)=>{
        knex("administradores")
            .select("*")
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    getOneAdmin:(id,callBack)=>{
        knex("administradores")
            .where({id})
            .select("*")
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    editOneAdmin:(data,id,callBack)=>{
        knex("administradores")
            .where({id})
            .update(data)
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    changeEstado:(data,id,callBack)=>{
        knex("administradores")
            .where({id})
            .update({Estado:data})
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    }
}