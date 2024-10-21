import createUserToken from "../helpers/createUserHelper.js"
import UserModel from "../models/UserModel.js"
import bcrypt from "bcrypt"

class UserController {
    static async register(req, res) {
        const { name, phone, email, password, confirmPassword } = req.body

        if (!name) {
            res.status(422).json("O nome é obrigatório.")
            return
        }
        if (!phone) {
            res.status(422).json("O telefone é obrigatório.")
            return
        }
        if (!email) {
            res.status(422).json("O email é obrigatório.")
            return
        }
        if (!password) {
            res.status(422).json("A senha é obrigatório.")
            return
        }
        if (!confirmPassword) {
            res.status(422).json("A confirmação de senha é obrigatória.")
            return
        }
        if (password != confirmPassword) {
            res.status(422).json("A senha confirmação de senha devem ser iguais.")
            return
        }

        const customerExists = await UserModel.findOne({ email: email })

        if (customerExists) {
            res.status(422).json({
                message: 'Por favor, utilize outro e-mail',
            })
            return
        }

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        const user = new UserModel({
            name: name,
            email: email,
            phone: phone, 
            password: passwordHash,
        })

        try {
            const newUser = await user.save()
            await createUserToken(newUser, req, res)
            return
            
        } catch (error) {
            res.status(500).json({message: error})
        }
    }
    static async login(req, res) {
        const {email, password} = req.body

        if(!email) {
            res.status(422).json("O e-mail é obrigatório.")
        }
        if(!password) {
            res.status(422).json("A senha é obrigatória.")
        }
    }
}

export default UserController