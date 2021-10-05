const Sequelize = require("sequelize")

exports.sequelize = new Sequelize ("localtv","root", "",{

    host:"localhost",
    port:"3306",
    dialect:"mariadb"
});
