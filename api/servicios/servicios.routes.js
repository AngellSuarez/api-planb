const router = require("express").Router();
const servicios_controller = require("./servicios.controller");

router.get("/",servicios_controller.ObtenerServicios);
router.get("/:id",servicios_controller.ObtenerOneServicio);
router.post("/",servicios_controller.CrearServicio);
router.put("/:id",servicios_controller.EditarServicio);
router.patch("/:id",servicios_controller.CambiarEstadoServicio);

module.exports = router;