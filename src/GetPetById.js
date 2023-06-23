const { client } = require('./dbConnect.js');
const { ObjectId } = require('mongodb');

async function GetPetById(id) {
  try {
    const database = client.db("petHealth");
    const collection = database.collection("pets");
    const result = await collection.findOne({ _id: new ObjectId(id) });
    if (!result) {
      throw new Error(`User with ID ${id} not found`);
    }
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = GetPetById;