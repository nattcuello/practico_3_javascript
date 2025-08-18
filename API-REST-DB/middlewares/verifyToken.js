const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) return res.status(403).json({ message: 'Token requerido' })

    const token = authHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify(token, 'secreto1234')
        req.userId = decodedToken.id
        req.userRol = decodedToken.rol
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Token invalido o expirado' })
    }

}

module.exports = verifyToken