
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String},
    chef_id: { type: String, required: true },
})
module.exports = mongoose.model("Restaurant",restaurantSchema);



