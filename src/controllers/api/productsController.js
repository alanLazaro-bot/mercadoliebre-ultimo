const { Product, Sequelize, Brand, Category } = require('../../database/models');
const Op = Sequelize.Op;

module.exports = {
latest (req, res){

    Product.findAll({
        order: [
            ['createdAt', 'DESC']
        ],
        limit: 8
    })
    .then(function(products){

        respuesta ={

            meta:{
                status:200,
                count:8,
                url:"/api/products/latest"
            },
            data: products
        }
        res.json(respuesta)
    })
},

offers (req, res){

    Product.findAll({
        where: {
            discount: {
                [Op.gt]: 50
            }
        },
        limit: 8
    })
    .then(function(products){

        respuesta = {

            meta:{
                status:200,
                count:8,
                url:"/api/products/offer"

            },
            data:products

            
        }
        res.json(respuesta)


        



})

},

category (req, res){



}


}