const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// Make App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/get-token', (req, res) => {
    const { email } = req.query;
    const token = jwt.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.send({ success: true, accessToken: token });
});

app.use((req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).send({ message: 'unauthorized access' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: 'forbidden access' });
        }
        req.decoded = decoded;
        next();
    });
})

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
        app.put('/user', async (req, res) => {
            const { email } = req.query;
            const user = req.body;
            const filter = { email };
            const options = { upsert: true };
            const updateDoc = {
                $set: user
            };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

        // Get All user
        app.get('/user', async (req, res) => {
            const result = await userCollection.find().toArray();
            res.send(result);
        });

        // Make Admin
        app.patch('/user/:id', async (req, res) => {
            const { id } = req.params;
            const filter = { _id: ObjectId(id) };
            const updateDoc = {
                $set: {
                    admin: true
                }
            };
            const result = await userCollection.updateOne(filter, updateDoc);
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