const router = require("express").Router();
const planes_controller = require("./planes.controller");

router.get("/",planes_controller.ObtenerPlanes);
router.get("/:id",planes_controller.ObtenerPlan);
router.post("/",planes_controller.CrearPlan);
router.put("/:id",planes_controller.EditarPlan);
router.patch("/:id",planes_controller.CambiarEstadoPlan);

module.exports = router;