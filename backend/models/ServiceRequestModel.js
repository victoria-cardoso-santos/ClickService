import mongoose from "../db/conn.js";
const {Schema} = mongoose

const ServiceRequest = mongoose.model(
    "ServiceRequest",
    new Schema({
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service",
            required: true
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        professional: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'in_progress', 'completed', 'cancelled'],
            default: 'pending',
            required: false
        },
        
    },

        {
            timestamps: true, 
        }
    )
)
export default ServiceRequest