const {create,getAll,getOne,editOne,statusChange,deleteOne} = require("./paseador.service");

const {genSaltSync,hashSync} = require("bcrypt")

module.exports = {
    getAllPaseadores:(req,res)=>{
        getAll((err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message,"error getting paseadores"]
                });
            };
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    getOnePaseador:(req,res)=>{
        const {id} = req.params;
        getOne(id,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message]
                });
            };
            if(results === 0){
                return res.status(404).json({
                    success:0,
                    message:"Paseador not found"
                });
            };
            return res.status(200).json({
                success:1,
                data:results[0]
            });
        });
    },
    createPaseador: (req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.Password = hashSync(body.Password,salt)
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:[err.message,"database connection error"]
                });
            };
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    editPaseador:(req,res)=>{
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
            if(results === 0){
                return res.status(404).json({
                    success:0,
                    message:"paseador not found"
                });
            }
            return res.status(200).json({
                message:"the paseador was edited succesfully",
                data:results
            });
        });
    },
    deletePaseador:(req,res)=>{
        const {id} = req.params;
        deleteOne(id,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message]
                });
            };
            if(result === 0){
                return res.status(404).json({
                    success:0,
                    message:"paseador not found"
                });
            }
            return res.status(200).json({
                success:1,
                message:"paseador deleted",
                data:result
            });
        });
    },
    statusChangePaseador:(req,res)=>{
        const {Estado} = req.body;
        const {id} = req.params;
        statusChange(id,Estado,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:[err.message]
                });
            };
            if(result.length === 0){
                return res.status(404).json({
                    success:0,
                    message:"paseador not found"
                });
            };
            if(!["activo","desactivado"].includes(Estado)){
                return res.status(400).json({
                    success:0,
                    message:"Invalid Estado"
                });
            };
            return res.status(200).json({
                success:1,
                message:["Estado cambiado correctamente a " + Estado],
                data:Estado
            });
        });
    }
}