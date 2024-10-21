import mongoose from "../db/conn";
const {Schema} = mongoose

const ServiceRequest = mongoose.model(
    "ServiceRequest",
    new Schema({
        service: {
            type: mongoose.SchemaType.ObjectId,
            ref: "Service",
            required: true
        },
        customer: {
            type: mongoose.SchemaType.ObjectId,
            ref: "Customer",
            required: true
        },
        professional: {
            type: mongoose.SchemaType.ObjectId,
            ref: "Professional",
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'in_progress', 'completed', 'cancelled'],
            default: 'pending'
        },
        date: {
            type: Date,
            required: true
        },
    })
)
export default ServiceRequest