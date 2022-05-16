const Restaurants = require("../models/restaurant");

exports.getRestaurants =(req,res) => {
    Restaurants.find({})
        .then(data => {
            res.send(data)
        }).catch(err => {
        console.log(err)
        res.send('id not exists!');
  });
};

exports.getRestaurant = (req,res) => {
    Restaurants.findById(req.params.id).then(data => {
   data? res.send(data) :  res.send('id not exists!')
  }).catch(err => {
        console.log(err)
        res.send('id not exists!');
  });
};
exports.deleteRestaurant = (req,res) => {
    Restaurants.findByIdAndDelete(req.params.id).then(data => {
    data ? res.send("Restaurant " + req.params.id + " delete successfully"):    res.send('id not exists!');
  }).catch(err => {
    res.send(err);
  });
};

exports.updateRestaurant = (req,res) => {
    Restaurants.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
        res.send('id not exists!');
      });
};
exports.addRestaurant = (req,res) => {
  const Restaurant = new Restaurants({name: req.body.name, image: req.body.image, chef_id: req.body.chef_id});
    Restaurant.save()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        console.log(err);
      });
};
