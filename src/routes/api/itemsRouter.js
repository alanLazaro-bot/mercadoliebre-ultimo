const express = require ('express')
const router = express.Router();
const apiItemsController = require('../../controllers/api/itemsController')
const authMiddleware = require('../../middlewares/auth');
const validator = require('../../middlewares/validator');



router.post('/addToCart', authMiddleware, validator.addToCart,  apiItemsController.addToCart)
//router.post('/deleteFromCart', authMiddleware, apiItemsController.deleteFromCart);


module.exports = router;