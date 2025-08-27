const express = require('express');
const router = express.Router();
const {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    updateUsuarioRol
} = require('../controllers/users.controller');

const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// 🔒 Listar todos los usuarios → solo admin
router.get('/', verifyToken, isAdmin, getUsuarios);

// 🔒 Obtener usuario por ID → cualquier usuario logueado
router.get('/:id', verifyToken, getUsuarioById);

// 🔒 Crear usuario (opcional, normalmente lo hace /auth/register) → solo admin
router.post('/', verifyToken, isAdmin, createUsuario);

// 🔒 Actualizar datos de un usuario (ej: su propio perfil) → logueado
router.put('/:id', verifyToken, updateUsuario);

// 🔒 Eliminar usuario → solo admin
router.delete('/:id', verifyToken, isAdmin, deleteUsuario);

// 🔒 Editar rol de usuario → solo admin
router.put('/:id/rol', verifyToken, isAdmin, updateUsuarioRol);

module.exports = router;
