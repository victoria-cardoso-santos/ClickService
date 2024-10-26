import jwt from 'jsonwebtoken'
import getToken from './getToken.js'

const checkToken = (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(401).json("Acesso negado")

    }
    const token = getToken(req)

    if (!token) {
        return res.status(401).json("Acesso negado")
    }

    try {
        const verified = jwt.verify(token, 'nossosecret')
        req.user = verified
        next()
    } catch (error) {
        return res.status(400).json("Token inválido")

    }
}

export default checkToken