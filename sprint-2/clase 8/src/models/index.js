const { Model,DataTypes} = require("sequelize")
const {sequelize} = require("../connection/sequelize")

class Modelo extends Model {}

Modelo.init({
    nombre: DataTypes.STRING,
    pantalla: DataTypes.STRING,
    smart: DataTypes.BOOLEAN,
    precio: DataTypes.INTEGER,
    marca_Id: DataTypes.INTEGER
},{sequelize, modelName:"Modelos"});

class Marca extends Model {}

Marca.init({
    nombre: DataTypes.STRING,
    
},{sequelize, modelName:"marcas"});


Marca.hasMany(Modelo, {as: "Modelos", foreignKey: "marca_id"})


module.exports = {Marca,Modelo}
