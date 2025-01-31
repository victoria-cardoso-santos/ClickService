import ServiceRequest from "../models/ServiceRequestModel.js"

class ServiceRequestController {
    static async request(req, res) {
        const {service, customer, professional} = req.body

        const serviceRequest = new ServiceRequest({
            service: service,
            customer: customer,
            professional: professional,
        })

        try {
            const newService = await serviceRequest.save()
            res.status(201).json("Serviço solicitado com sucesso.")

            return

        } catch (error) {
            res.status(500).json({ message: error })
        }
    }   
}

export default ServiceRequestController