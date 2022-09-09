import express from "express"
import morgan from "morgan"
import pkg from "../package.json"
import payloadRoutes from './app/routes/payload.routes'


//app
const app = express()
const cors = require("cors")

//morgan
app.use(morgan('dev'))

app.set('pkg', pkg)

//urlencoded
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

//cors
app.use(cors())

//routes
app.use(payloadRoutes);

//index
app.get('/',(req,res)=>{
    res.json({
        name:app.get('pkg').name,
        author:app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version
    });
});


export default app;
