const { getAllAdminstradores, getOneAdministrador, createAdmin, editOneAdmin, changeEstado } = require("./admin.controller")
const router = require("express").Router()

router.get("/",getAllAdminstradores);
router.get("/:id",getOneAdministrador);
router.post("/",createAdmin);
router.put("/:id",editOneAdmin);
router.patch("/:id",changeEstado)

module.exports = router