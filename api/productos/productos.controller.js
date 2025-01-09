const producto_service = require("./productos.service")

module.exports = {
    ObtenerProductos: async(req,res)=>{
        try{
            const productos = await producto_service.getAllProductos();
            res.status(200).json({
                success: true,
                data:productos
            });
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    },
    ObtenerOneProducto: async(req,res)=>{
        try{
            const {id} = req.params;
            const producto = await producto_service.getOneProducto(id);
            res.status(200).json({
                success:true,
                data:producto
            })
        }catch(error){
            return res.status(error.status || 500).json({
                success:false,
                error:error.message
            });
        };
    },
    CrearProducto: async(req,res)=>{
        try{
            const data = req.body;
            const producto = await producto_service.createProducto(data);
            res.status(201).json({
                success:true,
                data:producto
            });
        }catch(error){
            return error.status(error.status || 500).json({
                success:false,
                error: error.message
            });
        };
    },
    EditarProducto: async(req,res)=>{
        try{
            const {id} = req.params;
            const body = req.body;
            const producto = await producto_service.editOneProducto(id,body)
            return res.status(200).json({
                success:true,
                data:producto
            });
        }catch(error){
            return error.status(error.status || 500).json({
                success:false,
                error: error.message
            });
        };
    },
    ChangeEstadoProducto: async(req,res)=>{
        try{
            const {id} = req.params;
            const {estado} = req.body;
            const producto = await producto_service.changeEstadoProducto(id,estado);
            return res.status(200).json({
                success:true,
                data:producto
            });
        }catch(error){
            return error.status(error.status || 500).json({
                success:false,
                error: error.message
            });
        };
    }
} //fin del module exports