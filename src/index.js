import config from "./config/env";
import app from "./app"
import "./config/mongo"


const httpServer = require('http').Server(app)

httpServer.listen(config.PORT, () => {
    console.log( `Servidor ejecutandose en el puerto ${config.PORT}` )
})
