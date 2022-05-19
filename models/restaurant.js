
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String},
    chef_id:{type: Schema.Types.ObjectId,
        required: true,
        ref:'Chefs'},
    isPopular: {type:Boolean},
    signature_dish:{type: Schema.Types.ObjectId,
        required: true,
        ref:'Dishes'},
})
module.exports = mongoose.model("Restaurant",restaurantSchema);



