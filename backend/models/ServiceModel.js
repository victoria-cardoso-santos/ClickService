import mongoose from "../db/conn.js";
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
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    })
)
export default Service