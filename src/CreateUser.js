const { client } = require('./dbConnect.js');
const bcrypt = require('bcryptjs');

async function CreateUser(email, password, name) {
  try {
    const database = client.db("pethealth");
    const collection = database.collection("users");

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const result = await collection.insertOne({ email: email, password: hashedPassword, name: name });

    return result.insertedId;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = CreateUser;