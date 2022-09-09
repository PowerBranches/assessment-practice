import Payload from "../models/Payload"

export const createPayload = async (req, res) => {

    try {
        const {
            message,
            to,
            from,
            timeToLifeSec
        } = req.body

        const newPayload = new Payload({
            message,
            to,
            from,
            timeToLifeSec
        })

        const payloadSave = await newPayload.save();

        res.status(200).json({
            message: `Hello ${req.body.to} your message will be send`
        });
    } catch (error) {
        res.error(error)
        console.error('Error prueba')
  }
}