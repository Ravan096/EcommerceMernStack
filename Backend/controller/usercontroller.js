const catchAsyncError= require('../middleware/catchAsyncError');
const ErrorHandler= require('../util/errorhandler');
const Users= require('../models/usermodels');

exports.registeruser= catchAsyncError( async(req, res, next)=>{
        const {name,email, password}= req.body;

        const newuser= await Users.create({
            name,
            email,
            password,
            avatar:{
                public_id:"testing demo id",
                url:"demo avatar url"
            }
        })
        res.status(200).json({
            success:true,
            newuser
        });
    });



exports.getAllUsers= catchAsyncError(async(req,res,next)=>{
    const alluser= await Users.find(req.body);

    res.status(200).json({
        success:true,
        alluser
    })
})




exports.updateuser= catchAsyncError( async(req,res,next)=>{
    let updateduser= await Users.findById(req.params.id);
    if(!updateduser){
        return next(new ErrorHandler("User not found",404))
    }
    updateduser = await new Users.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        useFindAndModify:true,
        runValidators:false
    });
    res.status(200).json({
        success:true,
        updateduser
    })
})





exports.deleteuser= catchAsyncError(async(req,res,next)=>{
    const deleteduser= await Users.findById(req.params.id);

    if(!deleteduser){
        return next(new ErrorHandler("User not found",404))
    }
    deleteduser= await Users.deleteOne();
    
    res.status(200).json({
        success:true,
        message:"User deleted"
    })
})