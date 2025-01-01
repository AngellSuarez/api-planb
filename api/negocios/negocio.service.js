const knex = require("knex")(require("../../knexfile"));

module.exports = {
    create:(data,callBack)=>{
        knex("negocios")
            .insert(data)
            .then(result=>callBack(null,result))
            .catch(error => callBack(error))
    },
    getAll:(callBack)=>{
        knex("negocios")
            .select("*")
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    },
    getOne:(id,callBack)=>{
        knex("negocios")
            .where({id})
            .select("*")
            .then(result=>callBack(null,result))
            .catch(error=>callBack(error))
    },
    editOne:(data,id,callBack)=>{
        knex("negocios")
            .where({id})
            .update(data)
            .then(result=>callBack(null,result))
            .catch(error => callBack(error))
    },
    statusChange:(id,data,callBack)=>{
        knex("negocios")
            .where({id})
            .update(data)
            .then(result=>callBack(null,result))
            .catch(error=>callBack(error))
    },
    deleteOne:(id,callBack)=>{
        knex("negocios")
            .where({id})
            .delete()
            .then(result => callBack(null,result))
            .catch(error => callBack(error))
    }
}