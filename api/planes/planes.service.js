const knex = require("knex")(require("../../knexfile"));

module.exports = {
    getAllPlanes: async() =>{
        try{
            const planes = await knex("planes").select("*");
            return planes;
        }catch(error){
            console.error("Error al conseguir los planes: ",error.message);
            throw new Error("Error al obtener  los planes");
        }
    },
    GetOnePlan: async(id) =>{
        try{
            const plan = await knex("planes").where({id}).first();
            if(!plan){
                const error = new Error(`Plan con el id ${id} no encontrado`);
                error.status = 404;
                throw error;
            }
            return plan;
        }catch(error){
            error.status = error.status || 500;
            throw error;
        }
    },
    CreatePlan: async(data)=>{
        try{
            const plan = await knex("planes").insert(data);
            return plan;
        }catch(error){
            console.error("Error al crear el producto: ",error.message);
            throw new Error("Error al crear el producto");
        }
    },
    EditPlan: async(id,data)=>{
        try{
            const exist = await knex("planes").where({id}).first();
            if(!exist){
                const error = new Error(`El plan con id ${id} no existe para editar`);
                error.status = 404;
                throw error;
            }
            const producto = await knex("planes").where({id}).update(data);
            return producto;
        }catch(error){
            error.status = error.status || 500;
            throw error;
        }
    },
    ChangeEstadoPlan: async(id,estado)=>{
        try{
            const exist = await knex("planes").where({id}).first();
            if(!exist){
                const error = new Error(`El plan con id ${id} no existe para cambiar su estado`)
                error.status = 404;
                throw error;
            }
            const plan = await knex("planes").where({id}).update({Estado:estado})
            return plan;
        }catch(error){
            error.status = error.status || 500;
            throw error;
        }
    }
}