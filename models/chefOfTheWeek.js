
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const chefSchema = new Schema({
    chef_id:{type: Schema.Types.ObjectId,
        required: true,
        ref:'Chefs'},
})
module.exports = mongoose.model("ChefOfTheWeek",chefSchema);
