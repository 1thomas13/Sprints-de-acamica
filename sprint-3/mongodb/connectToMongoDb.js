const mongoose = require("mongoose")
const { stringify } = require("querystring")

const schema = {name:String, lastname:String, age:Number}

const Users = mongoose.model("Users", schema)

const uri = process.env.MONGODB_URI

mongoose.connect(uri)

exports.addNewUser = async addNewUser =>{
    const newPerson = {name:"Juan", lastname:"perez", age: 24}
    let newUser=new Users(newPerson)

    await newUser.save()
}

exports.getAllUsers = async getAllUsers =>{
    return await Users.findOne({name:"Juan"})
}