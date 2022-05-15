const express = require('express');
const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const chefRoutes = require('./routes/chefRoutes');
const dishRoutes = require('./routes/dishRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
// const mainRoutes = require('./routes/mainRoutes');

app.use(express.json())
app.use((req, res, next) => {
    next();
});

app.use('/api/chef',chefRoutes);
app.use('/api/dish',dishRoutes);
app.use('/api/restaurant',restaurantRoutes);
// app.use('/api',mainRoutes);


app.use(errorController.get404);

mongoConnect(() => {
    app.listen(3000);
});
