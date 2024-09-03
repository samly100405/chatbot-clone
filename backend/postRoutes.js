
const express = require("express")
const datebase = require("./connect")

let postRoutes = express.Router()

postRoutes.route("/countryNames").get(async (request, response) => { 
    let db = datebase.getDb()
    let data = await db.collection("country names").find({}).toArray()
    if (data.length > 0) {
        response.json(data)
    } else { 
        throw new Error("Data is empty")
    }
})

module.exports = postRoutes