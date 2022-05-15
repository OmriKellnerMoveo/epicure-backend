const {ObjectId} = require("mongodb");
const getDb = require('../util/database').getDb;

class Dish {
    constructor(name, image, description,price,tags,restaurant_id) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.tags = tags;
        this.restaurant_id = restaurant_id;
    }


    updateById(id) {
        const db = getDb();
        return db
            .collection('Dishes')
            .updateOne({_id: id},{$set : this})
            .then(dish => {
                return dish;
            })
            .catch(err => {
                console.log(err);
            });
    }
    static fetchAll() {
        const db = getDb();
        return db
            .collection('Dishes')
            .find()
            .toArray()
            .then(dish => {
                console.log(dish);
                return dish;
            })
            .catch(err => {
                console.log(err);
            });
    }
    static fetchById(id) {
        const db = getDb();
        return db
            .collection('Dishes')
            .findOne({_id: id})
            .then(dish => {
                console.log(dish)
                return dish;
            })
            .catch(err => {
                console.log(err);
            });
    }
    static deleteById(id) {
        const db = getDb();
        return db
            .collection('Dishes')
            .deleteOne({_id: id})
    }
    save() {
        const db = getDb();
        return db
            .collection('Dishes')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Dish;
