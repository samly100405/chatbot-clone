const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config({path: "./config.env"})
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     const db = client.db("countries");
//     const col = db.collection("country names");

//     const countryList = [{
//         "name": "France"
//     }]

//     const p = await col.insertMany(countryList)
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// export default run

let database

module.exports = { 
  connectToServer: () => { 
    database = client.db("countries")
  },
  getDb: () => { 
    return database
  }
}
console.log("hi")

