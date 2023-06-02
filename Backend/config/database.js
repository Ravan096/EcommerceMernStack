const mongoose= require('mongoose');


const connetDatabase =  ()=>{
    mongoose.connect(process.env.DataUri,{useNewUrlParser: true,useUnifiedTopology: true,keepAlive:true, family:4}).then((data)=>{
        console.log(`Mongodb is connected with server: ${data.connection.host}`);
    })
}

module.exports= connetDatabase;