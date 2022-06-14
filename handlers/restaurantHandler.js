const Restaurants = require("../models/restaurant");
const dish_controller = require("../controllers/dishController");
const Dishes = require("../models/dish");

exports.getRestaurants =(req,res) => {
    Restaurants.find({}).populate([{path: "Chef"},{path:"signature_dish"}])
        .then(data => {
            res.send(data)
        }).catch(err => {
        console.log(err)
        res.send('id not exists!');
  });
};

exports.getRestaurant = (req,res) => {
    Restaurants.findById(req.params.id).populate([{path: "Chef"},{path:"signature_dish"}]).then(data => {
   data? res.send(data) :  res.send('id not exists!')
  }).catch(err => {
        console.log(err)
        res.send('id not exists!');
  });
};
exports.deleteRestaurant = (req,res) => {
    Restaurants.findByIdAndDelete(req.params.id).then(restaurant => {
    restaurant ?
        Dishes.deleteMany({restaurant_id:req.params.id})
            .then(dishes => {
                dishes && res.send({"restaurants_id": req.params.id,"success":true})
            }).catch(err => {
            console.log(err)
            res.send(err);
        })
        : res.send('id not exists!');
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
  const Restaurant = new Restaurants({name: req.body.name, image: req.body.image, Chef: req.body.Chef, isPopular:req.body.isPopular,signature_dish:null});
    Restaurant.save()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        console.log(err);
      });
};

exports.getPopularRestaurants = (req, res) => {
    Restaurants.find({isPopular:true}).populate({path: "Chef"}).then(data => {
        data ? res.send(data) : res.send('no result found...')
    }).catch(err => {
        console.log(err)
        res.send('no result found...');
    });
};
