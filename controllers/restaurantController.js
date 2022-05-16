const restaurant_handler = require("../handlers/restaurantHandler");

exports.getRestaurants = async (req, res) => {
    await restaurant_handler.getRestaurants(req, res);
};
exports.getRestaurant = async (req, res) => {
    await restaurant_handler.getRestaurant(req,res);
}

exports.deleteRestaurant = async (req, res) => {
    await restaurant_handler.deleteRestaurant(req,res);
};

exports.updateRestaurant = async (req, res) => {
    await restaurant_handler.updateRestaurant(req,res);
};

exports.addRestaurant = async (req, res) => {
    await restaurant_handler.addRestaurant(req,res);
};






