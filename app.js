const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'catFoodNL';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

   
    insertDocuments(db, function() {
    findDocuments(db, function() {
      client.close();
});

const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('food');
    // Insert some documents
    collection.insertMany([
        {
            name: "Nature Cat Food can",
            madeIn: "Germany",
            score: 9,
            review: "We bought chicken and salmon flavour. My cat loves it."

        },
        {
            name: "Feringa can",
            madeIn: "Germany",
            score: 4,
            review: "Weird vegetables are added into the food...My cat only eats it when it is super hungry."

        },
        {
            name: "Wild Freedom can",
            madeIn: "Germany",
            score: 7,
            review: "My cat loves it, but the can has so much jelly instead of meat."
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('food');
    // Find some documents
    collection.find({}).toArray(function(err, food) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(food)
      callback(food);
    });
  }