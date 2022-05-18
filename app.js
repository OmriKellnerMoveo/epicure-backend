const express = require('express');
const errorController = require('./controllers/error');
const app = express();
const mainRoutes = require('./routes/mainRoutes');
const mongoose = require("mongoose");
const cors=require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())

app.use((req, res, next) => {
    next();
});

app.use('/api',mainRoutes);
app.use(errorController.get404);
mongoose.connect('mongodb+srv://Omrik:jX1qXaf5Cdpkbslm@epicure-db.dkha4.mongodb.net/epicure-db?retryWrites=true&w=majority'
).then(result=>{
    console.log("Connected!")
    app.listen(9000);
}).catch(err=>console.log(err))

