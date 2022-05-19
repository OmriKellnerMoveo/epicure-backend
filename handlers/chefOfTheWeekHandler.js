const ChefOfTheWeek = require("../models/chefOfTheWeek");

exports.getChefOfTheWeek = (req, res) => {
    ChefOfTheWeek.findOne().then(data => {
        data ? res.send(data) : res.send('Chef not exists!')
    }).catch(err => {
        console.log(err)
        res.send('Chef not exists!');
    });
};

exports.updateChefOfTheWeek = (req, res) => {
    ChefOfTheWeek.findOneAndUpdate({}, req.body, {new: true})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.send('id not exists!');
        });
};

exports.addChefOfTheWeek = (req, res) => {
    const Chef = new ChefOfTheWeek({chef_id: req.body.chef_id});
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
