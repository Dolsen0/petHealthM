const { client } = require('./dbConnect.js');

async function GetPets() {
  try {
    const database = client.db("petHealth");
    const collection = database.collection("pets");
    const result = await collection.find({}).toArray();
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = GetPets;