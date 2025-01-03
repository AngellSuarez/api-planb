const {createPaseador,editPaseador,getAllPaseadores,getOnePaseador,statusChangePaseador,deletePaseador} = require("./paseador.controller");

const router = require("express").Router();

router.get("/",getAllPaseadores)
router.get("/:id",getOnePaseador)
router.post("/",createPaseador)
router.patch("/:id",statusChangePaseador)
router.put("/:id",editPaseador)
router.delete("/:id",deletePaseador)

module.exports = router;



