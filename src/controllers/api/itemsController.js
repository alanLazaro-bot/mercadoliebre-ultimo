const bycrypt = require("bcryptjs");
const crypto = require("crypto");
const { validationResult } = require("express-validator");

// ******** Sequelize ***********

const {
  Product,
  Item,
} = require("../../database/models");

module.exports = {

  addToCart(req, res) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      // Busco el producto que voy a agregar como Item.
      Product.findByPk(req.body.productId, {
        include: ["user"],
      })
        .then((product) => {
          // Saco el valor del producto, teniendo en cuenta el descuento.

          let price =
            Number(product.discount) > 0
              ? product.price - (product.price * product.discount) / 100
              : product.price;

          // Creo el Item de compra
          return Item.create({
            salePrice: price,
            quantity: req.body.quantity,
            subTotal: price * req.body.quantity,
            state: 1,
            userId: req.session.user.id,
            sellerId: product.user.id,
            productId: product.id,
          });
        })
        .then(function(item){

          respuesta ={
  
              meta:{
                  status:201,
                  message:"Product added to cart"
                     
              },
              data: item
          }
         
          res.json(respuesta)
      })
        
        .catch((e) => console.log(e));
    } else {
       Product.findByPk(req.body.productId, {
         include: ["user"],
       })
         .then(product => {
            return res.render('products/detail', {product, errors: errors.mapped()})
         }).catch((e) => console.log(e));
    }
  },

  deleteFromCart(req, res) {
    Item.destroy({
      where: {
        id: req.body.itemId,
      },
      force: true,
    })
      .then((response) => res.redirect("/users/cart"))
      .catch((e) => console.log(e));
  },

}