const mongoose= require('mongoose');
const validator= require('validator');
const bcrypt= require('bcryptjs');

const userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:[30,"Name should not be exeed 30 characters"],
        minLength:[4,"Minimum character of name should be 4"]
    },
    email:{
        type:String,
        unique:true,
        validate:[validator.isEmail,"Please enter valid email"],
        required:true
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            required:true,
            type:String
        }
    },
    password:{
        type:String,
        required:true,
        select:false,
        minLength:[8,"Password should be greater than 8 characters" ]

    },
    role:{
        default:"user",
        type:String
    },
    resetPasswordtoken:String,
    resetPasswordexpired:Date
})

userschema.pre("save" ,async function(next) {
    if(!this.isModified("password")){
        next();
    }
    this.password= await bcrypt.hash(this.password,10)
})

module.exports= mongoose.model("User",userschema)