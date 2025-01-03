const {create, getAll,getOne,editOne,statusChange,deleteOne} = require("./negocio.service")

const {getSaltSync,hashSync, genSaltSync} = require("bcrypt")

module.exports = {
    getAllNegocios: (req,res)=>{
        getAll((err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message,"error getting negocios"]
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    getOneNegocio:(req,res)=>{
        const {id} = req.params
        getOne(id,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message,"error getting the negocio info"]

                });
            }
            if(results.length === 0){
                return res.status(404).json({
                    success:0,
                    message:"negocio not found"
                });
            };
            return res.status(200).json({
                success:1,
                data:results[0]
            });
        });
    },
    createNegocio:(req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt)
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:[err.message,"Database connection not found"]
                });
            };
            return res.status(200).json({
                success:1,
                data:results,
                message:"Negocio Created"
            });
        });
    },
    editNegocio:(req,res)=>{
        const body = req.body;
        const {id} = req.params;

        editOne(body,id,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message]
                });
            };
            if(results.length === 0){
                return res.status(404).json({
                    success:0,
                    message:"negocio not found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"usuario editado correctamente",
                data:results
            });
        });
    },
    statusChangeNegocio:(req,res)=>{
        const {Estado} = req.body;
        const {id} = req.params;
        statusChange(id,Estado,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message]
                });
            }
            if(result.length === 0){
                return res.status(404).json({
                    success:0,
                    message:"Negocio not found"
                });
            }
            if(!["activo","desactivado"].includes(Estado)){
                return res.status(400).json({
                    success:0,
                    message:"Invalid Estado"
                });
            };
            return res.status(200).json({
                success:1,
                message:"Estado cambiado correctamente",
                data:Estado
            });
        });
    },
    deleteOneNegocio:(req,res)=>{
        const {id} = req.params
        deleteOne(id,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message]
                });
            }
            if(result === 0){
                return res.status(404).json({
                    success:0,
                    message:"Negocio not found"
                });
            }
            return res.status(200).json({
                message:"negocio deleted",
                data:result
            })
        })
    }
}