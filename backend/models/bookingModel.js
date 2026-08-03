const { MongoClient, ObjectId } = require("mongodb");
const sendBookingEmails = require("../utils/sendEmail");

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
    client.connect();
    let db = client.db("eventbooking");
    let coll = db.collection("booking");
    coll.insertOne(obj)
    .then((result)=> 
        {sendBookingEmails(obj);
        res.send(result)})
    .catch((err)=>res.status(500).send(err))
    .finally (()=>client.close())
}

module.exports = { create };