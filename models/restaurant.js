
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String},
    chef_id:{type: Schema.Types.ObjectId,
        required: true,
        ref:'Chefs'},
})
module.exports = mongoose.model("Restaurant",restaurantSchema);



