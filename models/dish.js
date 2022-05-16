
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const dishSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String},
    description: { type: String, required: true },
    price:{type:Number},
    tags:[{type:String}],
    restaurant_id:{type: Schema.Types.ObjectId,
        required: true,
        ref:'Restaurant'},
})
module.exports = mongoose.model("Dishes",dishSchema);



dishSchema.method.filterDishesByPrice = function(data){
    const filter = { price: { $gte: 10 } };
    let docs = data.aggregate([
        { $match: filter }
    ]);
}

