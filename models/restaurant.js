const getDb = require('../util/database').getDb;

class Restaurant {
    constructor(name, image,chef_ID, Dishes  ) {
        this.name = name;
        this.image = image;
        this.chef_ID = chef_ID;
        this.Dishes = Dishes;
    }
    updateById(id) {
        const db = getDb();
        return db
            .collection('Restaurants')
            .updateOne({_id: id},{$set : this})
            .then(chef => {
                return chef;
            })
            .catch(err => {
                console.log(err);
            });
    }
    static fetchAll() {
        const db = getDb();
        return db
            .collection('Restaurants')
            .find()
            .toArray()
            .then(chef => {
                console.log(chef);
                return chef;
            })
            .catch(err => {
                console.log(err);
            });
    }
    static fetchById(id) {
        const db = getDb();
        return db
            .collection('Restaurants')
            .findOne({_id: id})
            .then(chef => {
                return chef;
            })
            .catch(err => {
                console.log(err);
            });
    }
    static deleteById(id) {
        const db = getDb();
        return db
            .collection('Restaurants')
            .deleteOne({_id: id})
    }
    save() {
        const db = getDb();
        return db
            .collection('Restaurants')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Restaurant;
