import mongoose from "../db/conn.js";
const { Schema } = mongoose

const User = mongoose.model(
    "User",
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
        }
        
    })
)
export default User