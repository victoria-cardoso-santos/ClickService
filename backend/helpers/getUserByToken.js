import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js'

const getUserbyToken = async (token) => {
    if (!token) {
        return res.status(401).json("Acesso negado")
    }

    const decoded = jwt.verify(token, "nossosecret")
    const userId = decoded.id

    const user = await User.findById(userId)
    return user
}

export default getUserbyToken