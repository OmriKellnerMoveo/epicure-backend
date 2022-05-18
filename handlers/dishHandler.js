const Dishes = require("../models/dish");

const {ObjectId} = require("mongodb");
const Restaurants = require("../models/restaurant");

exports.getDishes = (req, res) => {
    Dishes.find({}).populate({path: "restaurant_id"})
        .then(data => {
            res.send(data)
        }).catch(err => {
        console.log(err)
        res.send('id not exists!');
    });
};

exports.getDish = (req, res) => {
    Dishes.findById(req.params.id).populate({path: "restaurant_id"}).then(data => {
        data ? res.send(data) : res.send('id not exists!')
    }).catch(err => {
        console.log(err)
        res.send('id not exists!');
    });
};

exports.deleteDish = (req, res) => {
    Dishes.findByIdAndDelete(req.params.id).then(data => {
        data ? res.send("Dish " + req.params.id + " delete successfully") : res.send('id not exists!');
    }).catch(err => {
        console.log(err)
        res.send(err);
    });
};

exports.updateDish = (req, res) => {
    Dishes.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.send('id not exists!');
        });
};
exports.addDish = (req, res) => {
    const Dish = new Dishes({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
        tags: req.body.tags,
        restaurant_id: req.body.restaurant_id
    });
    Dish.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getRestaurantsByDish = async (req, res) => {
    try {
        const response = await Dishes.aggregate([{
            $match: {
                _id: ObjectId(req.params.id)
            }
        }, {
            $lookup: {
                from: 'restaurants', localField: 'id', foreignField: 'restaurant_id', as: 'restaurant_details'
            }
        }])
        res.send(response)
    } catch (err) {
        console.log(err)
    }
}
exports.getDishesByName = (req, res) => {
    Dishes.find({$or:[{name: {$regex : ".*"+req.params.id+".*"}},{description: {$regex : ".*"+req.params.id+".*"}}]}
    )
        .populate({path: "restaurant_id"})
        .then(dishes => {
            Restaurants.find({name: {$regex : ".*"+req.params.id+".*"}}).populate({path: "chef_id"}).then(restaurants => {
                const data ={
                    "dishes":dishes,
                    "restaurants":restaurants
                }
                res.send(data)
            })
        }).catch(err => {
            console.log(err)
            res.send('no result found...');
        })
};
