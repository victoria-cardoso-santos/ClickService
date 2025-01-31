import Service from '../models/ServiceModel.js'

class ServiceController {
    static async register (req, res) {
        const {name, description, price, userId} = req.body

        if(!name){
            res.status(422).json("O nome é obrigatório!")
            return
        }
        if(!description) {
            res.status(422).json("A descrição é obrigatória!")
            return
        }
        if(!price) {
            res.status(422).json("O preço é obrigatório.")
            return
        }

        const serviceExists = await Service.findOne({name: name})

        if (serviceExists) {
            res.status(422).json({
                message: 'Serviço já existe. Por favor, adicione outro nome',
            })
            return
        }

        const service = new Service({
            name: name,
            description: description,
            price: price,
            userId: userId,

        })

        try {
            const newService = await service.save()
            return res.status(201).json("Serviço criado com sucesso.")


        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

}
export default ServiceController