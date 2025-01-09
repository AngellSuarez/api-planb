const router = require("express").Router();
const productos_controller = require("./productos.controller")

router.get("/",productos_controller.ObtenerProductos);
router.get("/:id",productos_controller.ObtenerOneProducto);
router.post("/",productos_controller.CrearProducto);
router.put("/:id",productos_controller.EditarProducto);
router.patch("/:id",productos_controller.ChangeEstadoProducto);

module.exports = router;