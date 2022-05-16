const Dishes = require("../models/dish");

exports.getDishes =(req,res) => {
  Dishes.find({})
        .then(data => {
            res.send(data)
        }).catch(err => {
      console.log(err)
      res.send('id not exists!');
  });
};

exports.getDish = (req,res) => {
  Dishes.findById(req.params.id).then(data => {
   data? res.send(data) :  res.send('id not exists!')
  }).catch(err => {
      console.log(err)
      res.send('id not exists!');
  });
};
exports.deleteDish = (req,res) => {
  Dishes.findByIdAndDelete(req.params.id).then(data => {
    data ? res.send("Dish " + req.params.id + " delete successfully"):    res.send('id not exists!');
  }).catch(err => {
      console.log(err)
      res.send(err);
  });
};

exports.updateDish = (req,res) => {
  Dishes.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
          console.log(err)
          res.send('id not exists!');
      });
};
exports.addDish = (req,res) => {
  const Dish = new Dishes({name: req.body.name, image: req.body.image, description: req.body.description,price:req.body.price,tags:req.body.tags,restaurant_id:req.body.restaurant_id});
    Dish.save()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        console.log(err);
      });
};
