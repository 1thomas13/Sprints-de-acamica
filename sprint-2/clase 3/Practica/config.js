require("dotenv").config()

module.exports = {
    mongoDB: process.env.MONGO_URL || "mongodb://localhost:27017/bd",
    PORT: process.env.PORT || 3000
}
