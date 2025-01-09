const servicio_service = require("./servicios.service")

module.exports = {
    ObtenerServicios: async(req,res)=>{
        try{
            const servicios = await servicio_service.getAllServicios();
            res.status(200).json({
                success:true,
                data:servicios
            });
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    },
    ObtenerOneServicio: async(req,res)=>{
        try{
            const {id} = req.params;
            const servicio = await servicio_service.getOneServicio(id);
            res.status(200).json({
                success:true,
                data:servicio
            });
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    },
    CrearServicio: async(req,res)=>{
        try{
            const data = req.body;
            const servicio = await servicio_service.createServicio(data);
            res.status(201).json({
                success:true,
                data:servicio
            }) ;
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    },
    EditarServicio: async(req,res)=>{
        try{
            const {id} = req.params;
            const data = req.body;
            const servicio = await servicio_service.editOneServicio(id,data)  
            res.status(201).json({
                success:true,
                data:servicio
            });
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    },
    CambiarEstadoServicio: async(req,res)=>{
        try{
            const {id} = req.params;
            const {estado} = req.body;
            const servicio = await servicio_service.changeEstadoServicio(id,estado)
            return res.status(200).json({
                success:true,
                data:servicio
            });
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            })
        }
    }
}