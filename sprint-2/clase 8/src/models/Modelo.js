const { Model,DataTypes} = require("sequelize")
const {sequelize} = require("../connection/sequelize")

class Modelo extends Model {}

Modelo.init({
    nombre: DataTypes.STRING,
    pantalla: DataTypes.STRING,
    smart: DataTypes.BOOLEAN,
    precio: DataTypes.INTEGER,
    marca_id: DataTypes.INTEGER
},{sequelize, modelName:"modelos"});

module.exports = {Modelo}