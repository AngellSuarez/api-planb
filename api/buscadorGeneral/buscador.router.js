const router = require("express").Router();
const {search} = require("./buscador.controller");

router.get("/",async(req,res)=>{
    try{
        const response = await search(req.query)
        res.json(response)
    }catch(error){
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
});

module.exports = router;