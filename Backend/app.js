const express = require('express');
const app= express();
app.use(express.json());
const errormiddleware= require('./middleware/error')

const product= require('./route/produts');
const user= require('./route/userRoute');

app.use("/api/v1",product);
app.use("/api/v1",user);



app.use(errormiddleware);


module.exports= app;