// set up express app 
const express = require('express');
const app = express();
const port = 3000;
const GetUsers = require('./src/GetUsers.js');
// GET request

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', async (req, res) => {
    try {
        const result = await GetUsers();
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
  });

// listen for requests

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/ `);
  });