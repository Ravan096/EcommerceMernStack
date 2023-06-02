const Product= require('../models/productmodel');
const ErrorHandler = require('../util/errorhandler');
const catchAsyncError= require('../middleware/catchAsyncError');
const ApiFeature = require('../util/apifeatures');

exports.createProduct= catchAsyncError(
    async (req,res,next)=>{
        const product= await Product.create(req.body);
        res.status(201).json({
            success:true,
            product
        })
    }
)





exports.getAllProducts= catchAsyncError(async(req,res)=>{
    const resultPerPage= 5;
    const productCount= await Product.countDocuments();
        const apifeature= new ApiFeature(Product.find(),req.query).search()
        .filter().pagination(resultPerPage);
        const products=await apifeature.query;
        res.status(200).json({
        success: true,
        products
    })
    }
)


exports.getProductDetails= catchAsyncError(
    async (req, res ,next)=>{
        const productdetail= await Product.findById(req.params.id);
    
        if(!productdetail){
           return next(new ErrorHandler("Product not found",404))
        }
    
        res.status(200).json({
            success:true,
            productdetail,
            productCount
        })
    }
)


exports.updateProduct= catchAsyncError(
    async(req,res,next)=>{
        let updatedproducts= await Product.findById(req.params.id);
        if(!updatedproducts){
            return next(new ErrorHandler("Product not found",404))
        }
        updatedproducts= await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            useFindAndModify:false,
            runValidators:true
        });
        res.status(200).json({
            message:true,
            updatedproducts
    })
    }
)

exports.deleteproducts= catchAsyncError(
    async (req,res,next)=>{
        const deletedproduct= await Product.findById(req.params.id);
    
        if(!deletedproduct){
            return next(new ErrorHandler("Product not found",404))
        }
    
        await deletedproduct.deleteOne();
    
        res.status(200).json({
            success:true,
            message:"Product deleted"
        })
    }
)