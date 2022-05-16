const Chefs = require("../models/chef");

exports.getChefs =(req,res) => {
  Chefs.find({})
        .then(data => {
            res.send(data)
        }).catch(err => {
    res.send('id not exists!');
      console.log(err)
  });
};

exports.getChef = (req,res) => {
  Chefs.findById(req.params.id).then(data => {
   data? res.send(data) :  res.send('id not exists!')
  }).catch(err => {
      console.log(err)
    res.send('id not exists!');
  });
};
exports.deleteChef = (req,res) => {
  Chefs.findByIdAndDelete(req.params.id).then(data => {
    data ? res.send("chef " + req.params.id + " delete successfully"):    res.send('id not exists!');
  }).catch(err => {
    res.send(err);
      console.log(err)
  });
};

exports.updateChef = (req,res) => {
  Chefs.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
        res.send('id not exists!');
      });
};
exports.addChef = (req,res) => {
  const Chef = new Chefs({name: req.body.name, image: req.body.image, description: req.body.description});
  Chef.save()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        console.log(err);
      });
};

