const knex = require("../../knexfile")

//seach controller 
const search = async(queryParams)=>{
    //type is the table, q is the search 
    const {type='',q = '',page=1,limit = 5, sortBy='id',order='asc'} = queryParams

    try{

        if(!type){
            throw new Error("El parametro 'type' (tabla) es obligatorio")
        }

        const results = await knex(type)
            .where('Nombre','like',`%${q}%`)
            .orderBy(sortBy,order)
            .limit(parseInt(limit))
            .offset((page-1) * limit)

        //get the total of items in the search
        const total = await knex(type)
            .where('Nombre','like',`%${q}%`)
            .count('* as count')
            .first()

        return{
            data:results,
            pagination:{
                total:total.count,
                currentPage:parseInt(page),
                pageSize:parseInt(limit),
                totalPages:Math.ceil(total.count / limit)
            }
        };
    }catch(error){
        throw new Error(error.message)
    }
};

module.exports ={
    search
}
