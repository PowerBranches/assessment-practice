import mongoose from "mongoose";
import config from "./env.js";

mongoose.connect(config.MONGOSTRING)
    .then(db => console.log("Conectado con Mongo Atlas"))
    .catch(error => console.log(error));