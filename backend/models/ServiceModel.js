import mongoose from "../db/conn";
const {Schema} = mongoose

const Service = mongoose.model(
    "Service",
    new Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    })
)
export default Service