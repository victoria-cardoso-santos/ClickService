import createUserToken from "../helpers/createUserHelper.js"
import getToken from "../helpers/getToken.js"
import getUserbyToken from "../helpers/getUserByToken.js"
import User from "../models/UserModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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

        const customerExists = await User.findOne({ email: email })

        if (customerExists) {
            res.status(422).json({
                message: 'Por favor, utilize outro e-mail',
            })
            return
        }

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        const user = new User({
            name: name,
            email: email,
            phone: phone,
            password: passwordHash,
        })

        console.log(user);

        try {
            const newUser = await user.save()
            await createUserToken(newUser, req, res)
            return

        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
    static async login(req, res) {
        const { email, password } = req.body

        if (!email) {
            res.status(422).json("O e-mail é obrigatório.")
        }
        if (!password) {
            res.status(422).json("A senha é obrigatória.")
        }

        const user = await User.findOne({ email: email })

        if (!user) {
            res.status(422).json({
                message: "Não há usuário cadastrado com este e-mail!"
            })
            return
        }

        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) {
            res.status(422).json({
                message: "Senha inválida!"
            })
            return
        }

        await createUserToken(user, req, res)
    }

    static async checkUser(req, res) {
        let currentUser

        console.log(req.headers.authorization)
        if (req.headers.authorization) {
            const token = getToken(req)
            const decoded = jwt.verify(token, 'nossosecret')
            currentUser = await User.findById(decoded.id)
            currentUser.password = undefined
        }
        else {
            currentUser = null
        }

        res.status(200).send(currentUser)
    }

    static async getUserbyId(req, res) {
        const id = req.params.id
        const user = await User.findById(id).select("-password")

        if (!user) {
            res.status(422).json({
                message: "Usuário não encontrado!"
            })
            return
        }
        res.status(200).json(user)
    }

    static async edit(req, res) {
        const token = getToken(req)
        const user = await getUserbyToken(token)

        const { name, email, phone, password, confirmPassword } = req.body
        if (!name) {
            res.status(422).json("O nome é obrigatório.")
            return
        }
        user.name = name
        if (!phone) {
            res.status(422).json("O telefone é obrigatório.")
            return
        }
        user.phone = phone
        if (!email) {
            res.status(422).json("O email é obrigatório.")
            return
        }
        const userExists = await User.findOne({ email: email })

        if (user.email !== email && userExists) {
            res.status(422).json({
                message: "Já existe um usuário cadastrado com este e-mail!"
            })
            return
        }
        user.email = email

        if (password != confirmPassword) {
            res.status(422).json("As senhas não conferem")
            return
        }

        else if (password === confirmPassword && password != null) {
            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt)
            user.password = passwordHash
        }

        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $set: user },
                { new: true },
            )

            res.json({
                message: "Usuário atualizado com sucesso!",
                data: updatedUser
            })
        } catch (error) {
            res.status(500).json({ message: error })
        }

    }
}

export default UserController