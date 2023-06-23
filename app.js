const express = require('express');
const app = express();
const port = 3001;
const GetUsers = require('./src/GetUsers.js');
const GetPets = require('./src/GetPets.js');
const GetUserById = require('./src/GetUserById.js');
const GetUserByEmail = require('./src/GetUserByEmail.js');
const GetPetById = require('./src/GetPetById.js');

app.get('/', (req, res) => {
    res.send('Pet Health');
});

app.get('/allusers', async (req, res) => {
    try {
        const result = await GetUsers();
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

app.get('/allpets', async (req, res) => {
    try {
        const result = await GetPets();
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
  });

  app.get('/pets/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await GetPetById(id);
      res.send(result);
    } catch (err) {
      console.error(err);
      res.status(404).send({ error: err.message });
    }
  });

  app.get('/users/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await GetUserById(id);
      res.send(result);
    } catch (err) {
      console.error(err);
      res.status(404).send({ error: err.message });
    }
  });
  app.get('/users/user', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await GetUserByEmail(email);
      res.send(result);
    } catch (err) {
      console.error(err);
      res.status(404).send({ error: err.message });
    }
  });

app.get('/users/:userid/pet/:petid', async (req, res) => {
    res.send(req.params)
});


app.post('/register', async (req, res) => {
res.send('register new user here')
  });

app.post('/users/:userid/newpet', (req, res) => {
    res.send('new pet sends here')
});

app.post('/users/:userid/pet/:petid/medical', (req, res) => {
    res.send('register medical details here')
});

  
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/ `);
  });