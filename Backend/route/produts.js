const express= require('express');
const { getAllProducts,createProduct, updateProduct, deleteproducts, getProductDetails } = require('../controller/productcontroller');


const router=express.Router();

router.route('/products').get(getAllProducts);

router.route('/products/new').post(createProduct);

router.route('/products/:id').put(updateProduct);

router.route('/products/:id').delete(deleteproducts).get(getProductDetails);



module.exports= router;