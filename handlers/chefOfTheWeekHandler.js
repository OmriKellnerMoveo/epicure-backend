const ChefOfTheWeek = require("../models/chefOfTheWeek");
const Restaurants = require("../models/restaurant");

exports.getChefOfTheWeek = (req, res) => {
    ChefOfTheWeek.findOne().populate({path: "Chef"}).then(data => {
        data ? res.send(data) : res.send('Chef not exists!')
    }).catch(err => {
        console.log(err)
        res.send('Chef not exists!');
    });
};

exports.updateChefOfTheWeek = (req, res) => {
    ChefOfTheWeek.findOneAndUpdate({}, req.body, {new: true})
        .then(data => {
            res.send({"data":req.body,"success":true});
        })
        .catch(err => {
            console.log(err);
            res.send('id not exists!');
        });
};

exports.addChefOfTheWeek = (req, res) => {
    const Chef = new ChefOfTheWeek({Chef: req.body.Chef});
    Chef.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err);
        });
};

exports.deleteChefOfTheWeek = (req, res) => {
    ChefOfTheWeek.findOneAndDelete({}, req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.send('id not exists!');
        });
};

exports.getChefOfTheWeekRestaurants = (req, res) => {
    ChefOfTheWeek.findOne().then(chefOfTheWeek=>{
        Restaurants.find({Chef:chefOfTheWeek.Chef}).then(data=>{
            res.send(data)
        })
    }).catch(err => {
            console.log(err);
            res.send('chefOfTheWeek not exists!');
        });
};
