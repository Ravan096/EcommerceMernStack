const mongoose= require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Enter name"],
        // trim:true
    },
    description:{
        type:String,
        required:[true, "Enter description"]
    },
    price:{
        type:Number,
        maxLength:[8, "Price can not exceed 8 characters"],
        required:[true, "Enter product price"]
    },
    rating:{
        type:Number,
        default:0
    },

    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true, "Please enter product category"]

    },
    stock:{
        type:Number,
        required:[true,"enter produt stock"],
        maxLength:[4,"stock can not exceed 4 characters"],
        default:1
    },
    numofReview:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comments:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
    

    
})

module.exports= mongoose.model("Product",productSchema);