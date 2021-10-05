const { Model,DataTypes} = require("sequelize")
const {sequelize} = require("../connection/sequelize")
const {Modelo} = require("./Modelo.js")

class Marca extends Model {}

Marca.init({
    nombre: DataTypes.STRING,
    
},{sequelize, modelName:"marcas"});

Marca.hasMany(Modelo, {as: "modelos", foreignKey: "marca_id"})


module.exports = Marca