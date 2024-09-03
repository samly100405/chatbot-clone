import 'dotenv/config'

import { MongoClient } from 'mongodb'


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI)

async function run() {
    await client.connect()

    const db = client.db('gettingStarted')
    const col = db.collection('people')

    const peopleDocuments = [
        {
          "name": { "first": "Alan", "last": "Turing" },
          "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
          "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
          "contribs": [ "Turing machine", "Turing test", "Turingery" ],
          "views": 1250000
        },
        {
          "name": { "first": "Grace", "last": "Hopper" },
          "birth": new Date(1906, 12, 9), // Dec 9, 1906                                                                                                                                 
          "death": new Date(1992, 1, 1),  // Jan 1, 1992                                                                                                                                  
          "contribs": [ "Mark I", "UNIVAC", "COBOL" ],
          "views": 3860000
        }
      ]

    const p = await col.insertMany(peopleDocuments)

    const filter = { "name.last": "Turing"}
    const doc = await col.findOne(filter)
    
    console.log(JSON.stringify(doc))

    await client.close()
}
run().catch(console.dir);
