import mongoose from "../db/conn";
const { Schema } = mongoose

const Professional = mongoose.model(
    "Professional",
    new Schema({
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        available: {
            type: Boolean,
            required: false,
        },
        services: [{
            type: mongoose.SchemaType.ObjectId,
            ref: "Service",
            required: false,
        }],
    })
)
export default Professional