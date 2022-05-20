const chefOfTheWeek_handler = require("../handlers/chefOfTheWeekHandler");

exports.getChefOfTheWeek = async (req, res) => {
    await chefOfTheWeek_handler.getChefOfTheWeek(req,res);
}

exports.updateChefOfTheWeek = async (req, res) => {
    await chefOfTheWeek_handler.updateChefOfTheWeek(req,res);
};


exports.addChefOfTheWeek = async (req, res) => {
    await chefOfTheWeek_handler.addChefOfTheWeek(req,res);
};



exports.deleteChefOfTheWeek = async (req, res) => {
    await chefOfTheWeek_handler.deleteChefOfTheWeek(req,res);
};


exports.getChefOfTheWeekRestaurants = async (req, res) => {
    await chefOfTheWeek_handler.getChefOfTheWeekRestaurants(req,res);
};



