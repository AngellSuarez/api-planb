const {genSaltSync, hashSync} = require("bcrypt")
const {getAllAdmin, getOneAdmin, createAdmin, editOneAdmin, changeEstado} = require("./admin.service")

module.exports = {
    getAllAdminstradores: (req,res)=>{
        getAllAdmin((err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message]
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },
    getOneAdministrador:(req,res)=>{
        const {id} = req.params
        getOneAdmin(id,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message]
                });
            }
            if(results.length === 0){
                console.log("Usuario no encontrado")
                return res.status(404).json({
                    success:0,
                    message:[err.message]
                });
            }
            return res.status(200).json({
                success:1,
                data:results[0]
            });
        })
    },
    createAdmin:(req,res)=>{
        const body = req.body
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt)
        createAdmin(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:err.message
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    editOneAdmin:(req,res)=>{
        const body = req.body
        const {id} = req.params
        editOneAdmin(body,id,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:err.message
                });
            }
            if(result === 0){
                return res.status(404).json({
                    success:0,
                    message:"Admin no encontrado"
                });
            }
            return res.status(200).json({
                success:1,
                data:result
            })
        });
    },
    changeEstado:(req,res)=>{
        const body = req.body
        const {id} = req.params
        changeEstado(body,id,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:err.message
                });
            }
            if(result === 0){
                return res.status(404).json({
                    success:0,
                    message:"Admin no encontrado"
                });
            }
            return res.status(200).json({
                success:1,
                data:result
            });
        });
    }
}