const { client } = require('./dbConnect.js');
const { ObjectId } = require('mongodb');


async function GetUserByEmail(email) {
  try {
    const database = client.db("pethealth");
    const collection = database.collection("users");
    const result = await collection.findOne({ email: email });
    if (!result) {
      throw new Error(`User with ID ${email} not found`);
    }
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = GetUserByEmail;