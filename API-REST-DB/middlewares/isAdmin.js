const isAdmin = (req, res, next) => {
    if (req.user.user.rol !== 'admin') {
        return res.status(403).json({ message: 'Acceso denegado, se requiere rol administrador' });
    }
    next();
};

module.exports = isAdmin;
