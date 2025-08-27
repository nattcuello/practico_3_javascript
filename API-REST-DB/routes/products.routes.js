const express = require('express');
const router = express.Router();
const { 
    getProducts, getProductById, createProduct, updateProduct, deleteProduct 
} = require('../controllers/products.controller');

const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// Obtener productos → libre
router.get('/', getProducts);
router.get('/:id', getProductById);

// Crear, editar y borrar productos → solo admin
router.post('/', verifyToken, isAdmin, createProduct);
router.put('/:id', verifyToken, isAdmin, updateProduct);
router.delete('/:id', verifyToken, isAdmin, deleteProduct);

module.exports = router;
