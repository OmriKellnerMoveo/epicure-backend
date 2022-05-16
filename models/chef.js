
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const chefSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String},
})
module.exports = mongoose.model("Chefs",chefSchema);
