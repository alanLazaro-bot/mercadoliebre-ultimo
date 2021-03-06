const express = require ('express')
const router = express.Router();
const apiItemsController = require('../../controllers/api/itemsController')
const authMiddleware = require('../../middlewares/auth');
const validator = require('../../middlewares/validator');



router.post('/', authMiddleware, validator.addToCart, apiItemsController.addToCart) //Agregar , authMiddleware, validator.addToCart
router.delete('/', authMiddleware, apiItemsController.deleteFromCart);


module.exports = router;