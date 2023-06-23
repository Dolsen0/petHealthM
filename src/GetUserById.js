const { client } = require('./dbConnect.js');
const { ObjectId } = require('mongodb');

const GetPetById = require('./GetPetById'); // assuming GetPetById is in the same directory

async function GetUserById(id) {
  try {
    const database = client.db("petHealth");
    const collection = database.collection("users");
    const user = await collection.findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    if(user.pets && user.pets.length > 0){
        const petPromises = user.pets.map(async (petId) => {
            return await GetPetById(petId);
        });

        // Wait for all petPromises to resolve
        user.pets = await Promise.all(petPromises);
    }

    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = GetUserById;
