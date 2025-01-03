const {createNegocio,getAllNegocios,getOneNegocio,editNegocio,statusChangeNegocio,deleteOneNegocio} = require("./negocio.controller");
const router = require("express").Router();

router.get("/",getAllNegocios);
router.get("/:id",getOneNegocio);
router.post("/",createNegocio);
router.put("/:id",editNegocio);
router.patch("/:id",statusChangeNegocio);
router.delete("/:id",deleteOneNegocio);

module.exports = router;