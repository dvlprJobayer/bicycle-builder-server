const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// Make App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5bvzh.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const partsCollection = client.db("bicycle-builder").collection("all-parts");
        const userCollection = client.db("bicycle-builder").collection("users");

        // ALL Spare Parts
        app.get('/all-parts', async (req, res) => {
            const result = await partsCollection.find().sort({ "_id": -1 }).toArray();
            res.send(result);
        });

        // User Insert
        app.post('/user', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.send(result);
        });
    }
    finally { }
}
run().catch(console.dir);

// Test Api
app.get('/', (req, res) => {
    res.send('Running to do server');
});

// Listen App
app.listen(port, () => {
    console.log('Running server on', port);
});