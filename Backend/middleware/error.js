const ErrorHandler= require('../util/errorhandler');

module.exports=(err, req, res, next)=>{
    err.statuscode= err.statuscode||500;
    err.message= err.message|| "Internal server error";


    //Wrong mongodb id error
    if(err.name=== "CastError"){
        const message= `Resource not found. Invalid ${err.path}`;
         err= new ErrorHandler(message,400)
    }


    res.status(err.statuscode).json({
        success:false,
        message:err.message
    })
}