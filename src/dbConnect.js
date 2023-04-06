const MongoClient = require('mongodb').MongoClient;
const secrets = require('./secrets.json');
const uri = `mongodb+srv://${secrets.name}:${secrets.password}@pethealth.yubahhf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function dbConnect() {
  try {
    await client.connect();
    console.log("Connected to database!");
    return data
  } catch (err) {
    console.error(err);
  }
}

module.exports = { client, dbConnect };