import {Schema, model} from "mongoose"

const payloadSchema = new Schema({
    message: String,
    to:String,
    from:String,
    timeToLifeSec: Number
},{
    versionKey:false,
    timestamps:true
})

export default model("Payload", payloadSchema)
