const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');

const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;
 
module.exports = {
  connectToServer: function (callback) {
    // client.connect(function (err, db) {
    //   // Verify we got a good "db" object
    // console.log("yoo");

    //   if (db)
    //   {
    //     _db = db.db("ShopDb");
    //     console.log("Successfully connected to MongoDB."); 
    //   }
    //   return callback(err);
    // });
    mongoose.connect(Db, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
_db = connection
  },
 
  getDb: function () {
    return _db;
  },
};