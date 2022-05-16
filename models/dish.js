
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const dishSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String},
    description: { type: String, required: true },
    price:{type:Number},
    tags:[{type:String}],
    restaurant_id:{String}
})
module.exports = mongoose.model("Dishes",dishSchema);





