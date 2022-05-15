const Dish = require("../models/dish");
const {ObjectId} = require("mongodb");

exports.getDishes = (req, res) => {
    Dish.fetchAll().then(data => {
        console.log(data);
        data ? res.send(data) : res.send('Dishes are not exists!');
    })
};

exports.getDish = (req, res) => {
    const id = new ObjectId(req.params.id);
    Dish.fetchById(id).then(data => {
        console.log(data);
        data ? res.send(data) : res.send('id not exists!');
    })
};

exports.deleteDish = (req, res) => {
    const id = new ObjectId(req.params.id);
    Dish.deleteById(id)
        .then(data => {
            data.deletedCount === 1 ? res.send("Dish " + req.params.id + " delete successfully") : res.send('id not exists!');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.updateDish = (req, res) => {
    const dish = new Dish(req.body.name, req.body.image, req.body.description, req.body.price, req.body.tags, req.body.restaurant_id);
    const id = new ObjectId(req.params.id);
    dish.updateById(id)
        .then(data => {
            data ? res.send(data) : res.send('id not exists!');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postDish = (req, res) => {
    const dish = new Dish(req.body.name, req.body.image, req.body.description, req.body.price, req.body.tags, req.body.restaurant_id);
    dish
        .save()
        .then(result => {
            res.send({dish})
        })
        .catch(err => {
            console.log(err);
        });
};

