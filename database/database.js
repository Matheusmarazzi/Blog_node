const Sequelize = require("sequelize");


const connection = new Sequelize('blog', 'root', '0611', {
    host: 'localhost',
    dialect: 'mysql',
    port: 4000
});

module.exports = connection;
