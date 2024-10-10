const { createUser, getAllUser, getOneUSer, editUser, statusChangeOne } = require("./user.controller")
const router = require("express").Router();

router.get("/",getAllUser)
router.post("/",createUser);
router.get("/:id",getOneUSer)
router.put("/:id",editUser)
router.patch("/:id",statusChangeOne)
module.exports = router