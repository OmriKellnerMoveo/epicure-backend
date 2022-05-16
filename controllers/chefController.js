const chef_handler = require("../handlers/chefHandler");

exports.getChefs = async (req, res) => {
        await chef_handler.getChefs(req, res);
};
exports.getChef = async (req, res) => {
    await chef_handler.getChef(req,res);
}

exports.deleteChef = async (req, res) => {
    await chef_handler.deleteChef(req,res);
};

exports.updateChef = async (req, res) => {
    await chef_handler.updateChef(req,res);
};

exports.addChef = async (req, res) => {
    await chef_handler.addChef(req,res);
};

