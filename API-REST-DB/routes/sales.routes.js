const express = require('express')
const router = express.Router()
const { getAllSales, getSaleById, createSale, updateSale, deleteSale } = require('../controllers/ventas.controller')
const verifyToken = require('../middlewares/verifyToken')
const isAdmin = require('../middlewares/isAdmin')

// Ver ventas → logueado
router.get('/', verifyToken, getAllSales)
router.get('/:id', verifyToken, getSaleById)

// Crear venta → logueado
router.post('/', verifyToken, createSale)

// Editar / Eliminar ventas → solo admin
router.put('/:id', verifyToken, isAdmin, updateSale)
router.delete('/:id', verifyToken, isAdmin, deleteSale)

module.exports = router
