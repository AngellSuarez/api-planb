const planes_service = require("./planes.service");

module.exports = {
    ObtenerPlanes: async(req,res)=>{
        try{
            const planes = await planes_service.getAllPlanes();
            res.status(201).json({
                success:true,
                data:planes
            });
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    },
    ObtenerPlan: async(req,res)=>{
        try{
            const {id} = req.params;
            const plan = await planes_service.GetOnePlan(id);
            res.status(201).json({
                success:true,
                data:plan
            });
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    },
    CrearPlan: async(req,res)=>{
        try{
            const data = req.body;
            const plan = await planes_service.CreatePlan(data);
            res.status(201).json({
                success:true,
                data:plan
            });
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    },
    EditarPlan: async(req,res)=>{
        try{
            const {id} = req.params;
            const data = req.body;
            const plan = await planes_service.EditPlan(id,data);
            res.status(201).json({
                success:true,
                data:plan
            });
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    },
    CambiarEstadoPlan: async(req,res)=>{
        try{
            const {id} = req.params;
            const {estado} = req.body;
            const plan = await planes_service.ChangeEstadoPlan(id,estado);
            res.status(201).json({
                success:true,
                data:plan
            });
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    }
}