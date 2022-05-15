const Chef = require("../models/chef");
const {ObjectId} = require("mongodb");
exports.getChefs = (req, res) => {
    Chef.fetchAll().then(data => {
        console.log(data);
        data ? res.send(data) : res.send('Chefs not exists!');
    })
};

exports.getChef = (req, res) => {
    const id = new ObjectId(req.params.id);
    Chef.fetchById(id).then(data => {
        console.log(data);
        data ? res.send(data) : res.send('id not exists!');
    })
};

exports.deleteChef = (req, res) => {
    const id = new ObjectId(req.params.id);
    Chef.deleteById(id)
        .then(data => {
            data.deletedCount === 1 ? res.send("chef " + req.params.id + " delete successfully") : res.send('id not exists!');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.updateChef = (req, res) => {
    const chef = new Chef(req.body.name, req.body.image, req.body.description);
    const id = new ObjectId(req.params.id);
    chef.updateById(id)
        .then(data => {
            data ? res.send(data) : res.send('id not exists!');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postChef = (req, res) => {
    const chef = new Chef(req.body.name, req.body.image, req.body.description);
    chef
        .save()
        .then(result => {
            res.send({chef})
        })
        .catch(err => {
            console.log(err);
        });
};

