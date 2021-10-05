require("dotenv").config()
const Sequelize = require("sequelize")

exports.config = 
    {db: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || "3306",
        user: process.env.DB_USER || "root",
        pass: process.env.DB_PASS || "",
        database: process.env.DB_NAME || "acamica"
    }
}
