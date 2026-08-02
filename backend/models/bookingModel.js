const { MongoClient, ObjectId } = require("mongodb");

let url = process.env.MONGO_URI;
let getCollection = () => {
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("eventbooking");
    let coll = db.collection("booking");
    return { client, coll};
};

let create = (obj, res) =>
{
    let client = new MongoClient(url);
    const now = new Date();
    obj.created_at = now;
    obj.updated_at = now;
    client.connect();
    let db = client.db("eventbooking");
    let coll = db.collection("booking");
    coll.insertOne(obj)
    .then((result)=> res.send(result))
    .catch((err)=>res.status(500).send(err))
    .finally (()=>client.close())
}

module.exports = { create };