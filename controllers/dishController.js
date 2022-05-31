const dish_handler = require("../handlers/dishHandler");

exports.getDishes = async (req, res) => {
    await dish_handler.getDishes(req, res);
};
exports.getDish = async (req, res) => {
    await dish_handler.getDish(req,res);
}

exports.deleteDish = async (req, res) => {
    await dish_handler.deleteDish(req,res);
};

exports.updateDish = async (req, res) => {
    await dish_handler.updateDish(req,res);
};

exports.addDish = async (req, res) => {
    await dish_handler.addDish(req,res);
};
exports.getRestaurantsByDish = async (req, res) => {
    await dish_handler.getRestaurantsByDish(req,res);
};
exports.getDishesByRestaurants = async (req, res) => {
    await dish_handler.getDishesByRestaurants(req,res);
};

exports.getDishesByName = async (req, res) => {
    await dish_handler.getDishesByName(req,res);
};


exports.getSignatureDish = async (req, res) => {
    await dish_handler.getSignatureDish(req,res);
};





