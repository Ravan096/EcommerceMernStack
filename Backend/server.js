const app = require('./app');
const dotenv= require('dotenv');
const connetDatabase= require('./config/database');

//handling uncaught exception
process.on("uncaughtException",err=>{
    console.log(`error: ${err.message}`);
    console.log("server is shutting down due to the uncaughtException error");

    process.exit(1);
})


//Config
dotenv.config({path:'Backend/config/config.env'});
connetDatabase();

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

// unhandled promise rejection 
process.on("unhandledRejection",err=>{
    console.log(`error: ${err.message}`);
    console.log("server is shutting down due to the unhandled error");

    server.close(()=>{
        process.exit(1);
    })
    
})