require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")

//routes
const userRouter = require("./api/users/user.routes")
const adminRouter = require("./api/administrador/admin.routes")
const negocioRouter = require("./api/negocios/negocio.routes")
// const paseadoRouter = require("./api/paseadores/paseador.routes")
const searchRouter = require("./api/buscadorGeneral/buscador.router")
const productoRouter = require("./api/productos/productos.routes")

app.get("/api", (req,res)=>{
    res.json({
        success:1,
        message:"This rest api is working"
    });
});

//middleware
app.use(express.json());
app.use(cors())
app.use("/api/users/",userRouter);
app.use("/api/admin/",adminRouter);
app.use("/api/negocios/",negocioRouter);
// app.use("/api/paseador/",paseadoRouter);
app.use("/api/search/",searchRouter);
app.use("/api/productos/",productoRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on PORT:",process.env.APP_PORT)
});


