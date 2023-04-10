const { client } = require('./dbConnect.js');

async function GetUser() {
  try {
    const database = client.db("pethealth");
    const collection = database.collection("users");
    const result = await collection.find({}).toArray();
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

