const { create, getAll, getOne, editOne, statusChange, deleteOne } = require("./user.service")

const { genSaltSync, hashSync } = require("bcrypt")

module.exports = {
    getAllUser: (req,res)=>{
        getAll((err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message:[err.message,"error getting users"]
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    getOneUSer:(req,res)=>{
        const {id} = req.params
        getOne(id,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message,"error getting the user information"]
                });
            }
            if(results.length === 0){
                return res.status(404).json({
                    success:0,
                    message:"user not found"
                })
            }
            return res.status(200).json({
                success:1,
                data:results[0]
            })
        })
    },

    createUser: (req,res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt)
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:[err.message,"database connection error"]
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    editUser:(req,res)=>{
        const body = req.body;
        const {id} = req.params;

        editOne(body,id,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message]
                });
            }
            if(results.length === 0){
                return res.status(404).json({
                    success:0,
                    message:"user not found"
                });
            }
            return res.status(200).json({
                message:"usuario editado correctamente", 
                data:results
            });
        });
    },
    statusChangeOne:(req,res)=>{
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
                    message:"user not found"
                });
            }
            return res.status(200).json({
                succes:1,
                message:"Estado cambiado correctamente",
                data:Estado
            });
        });
    },
    deleteOneUser:(req,res)=>{
        const {id} = req.params

        deleteOne(id,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:err.message
                });
            }
            if(result === 0 ){
                return res.status(404).json({
                    success:0,
                    message:"user not found"
                });
            }
            return res.status(200).json({
                message:"usuario borrado correctamente",
                data:result
            });
        });
    }
}