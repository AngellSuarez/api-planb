const {create, getAll,getOne,editOne,statusChange,deleteOne} = require("./negocio.service")

const {getSaltSync,hashSync} = require("bcrypt")

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
        getAll(id,(err,results)=>{
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
}