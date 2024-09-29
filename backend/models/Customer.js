import mongoose from "./db/conn";
const { Schema } = mongoose

const Customer = mongoose.model(
    "Customer",
    new Schema({
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    })
)

export default Customer