const {ObjectId} = require("mongodb");
const getDb = require('../util/database').getDb;

class Chef {
    constructor(name, image, description) {
        this.name = name;
        this.image = image;
        this.description = description;
    }
    updateById(id) {
        const db = getDb();
        return db
            .collection('Chefs')
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
            .collection('Chefs')
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
            .collection('Chefs')
            .findOne({_id: id})
            .then(chef => {
                console.log(chef)
                return chef;
            })
            .catch(err => {
                console.log(err);
            });
    }
    static deleteById(id) {
        const db = getDb();
        return db
            .collection('Chefs')
            .deleteOne({_id: id})
    }
    save() {
        const db = getDb();
        return db
            .collection('Chefs')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Chef;
