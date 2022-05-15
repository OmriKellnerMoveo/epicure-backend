const Restaurant = require("../models/restaurant");
const {ObjectId} = require("mongodb");

exports.getRestaurants = (req, res) => {
    Restaurant.fetchAll().then(data => {
        console.log(data);
        data?  res.send(data): res.send('Restaurants not exists!');
    })
};

exports.getRestaurant = (req, res) => {
    const id = new ObjectId(req.params.id);
    Restaurant.fetchById(id).then(data => {
    console.log(data);
    data?  res.send(data): res.send('id not exists!');
  })
};

exports.deleteRestaurant = (req, res) => {
    const id = new ObjectId(req.params.id);
    Restaurant.deleteById(id)
      .then(data => {
        data.deletedCount ===1?  res.send("Restaurant " + req.params.id + " delete successfully"): res.send('id not exists!');
      })
      .catch(err => {
        console.log(err);
      });
};

exports.updateRestaurant = (req, res) => {
    const restaurant = new Restaurant(req.body.name, req.body.image,req.body.chef_ID, req.body.Dishes);
    restaurant.updateById(parseInt(req.params.id))
      .then(data => {
        data?  res.send(data): res.send('id not exists!');
      })
      .catch(err => {
        console.log(err);
      });
};

exports.postRestaurant = (req, res) => {
    console.log('start post rest')
    const restaurant = new Restaurant(req.body.name, req.body.image,req.body.chef_ID, req.body.Dishes);
    restaurant
      .save()
      .then(result => {
        res.send({restaurant})
      })
      .catch(err => {
        console.log(err);
      });
};

