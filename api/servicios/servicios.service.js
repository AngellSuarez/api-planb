const knex = require("knex")(require("../../knexfile"));

module.exports = {

    createServicio: async(data)=>{
        try{
            const servicio = await knex("servicios").insert(data);
            return servicio
        }catch(error){
            console.error("Error al crear el servicio: ",error.message);
            throw new Error("Error al crear el servicio");
        };
    },

    getAllServicios: async() =>{
        try{
            const servicios = await knex("servicios").select("*");
            return servicios;
        }catch(error){
            console.log("Error al obtener los servicios: ",error.message);
            throw new Error("Error al obtener los servicios");
        };
    },

    getOneServicio: async(id)=>{
        try{
            const servicio = await knex("servicios").where({id}).first();
            if(!servicio){
                const error = new Error(`Servicio con id ${id} no encontrado`);
                error.status = 404;
                throw error;
            }
            return servicio;
        }catch(error){
            error.status = error.status || 500;
            throw error;
        };
    },

    editOneServicio: async(id,data)=>{
        try{
            const exist = await knex("servicios").where({id}).first();
            if(!exist){
                const error = new Error(`El producto con el id ${id} no existe`);
                error.status = 404;
                throw error;
            }
            const servicio = await knex("servicios").where({id}).update(data);
            return servicio;
        }catch(error){
            error.status = error.status || 500;
            throw error;
        };
    },
    
    changeEstadoServicio: async(id,estado) =>{
        try{
            const exist = await knex("servicios").where({id}).first();
            if(!exist){
                const error = new Error(`El servicio con el id ${id} no existe`);
                error.status = 404;
                throw error;
            }
            const servicio = await knex("servicios").where({id}).update({Estado: estado});
            return servicio;
        }catch(error){
            error.status = error.status || 500;
            throw error;
        };
    }
        
}