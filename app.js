const express = require('express');
const errorController = require('./controllers/error');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const chefRoutes = require('./routes/chefRoutes');
const dishRoutes = require('./routes/dishRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const mongoose = require("mongoose");

app.use(express.json())
app.use((req, res, next) => {
    next();
});

app.use('/api/chef',chefRoutes);
app.use('/api/dish',dishRoutes);
app.use('/api/restaurant',restaurantRoutes);


app.use(errorController.get404);
mongoose.connect('mongodb+srv://Omrik:jX1qXaf5Cdpkbslm@epicure-db.dkha4.mongodb.net/epicure-db?retryWrites=true&w=majority'
).then(result=>{
    console.log("Connected!")
    app.listen(3000);
}).catch(err=>console.log(err))
