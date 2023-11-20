const {sauces, items, users} = require('./seedData.js');

const {sequelize} = require('./db');
const {Sauce} = require('./models');
const {User} = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(sauces.map(sauce => Sauce.create(sauce)));
        await Promise.all(users.map(user => User.create(user)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();