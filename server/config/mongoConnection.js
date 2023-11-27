const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const databaseName = "TokTik";

async function clientConnection() {
  try {
    await client.connect();
    console.log("Successfully to connect mongodb");
    return client;
  } catch {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

function getDatabse() {
  return client.db(databaseName);
}

module.exports = {
  clientConnection,
  getDatabse,
};
