const express = require('express');
const app = express();
require('dotenv').config();

const { sendMessageToIa } = require('./src/controllers/apiController');

// app.use(express.urlencoded({
//     extended: true
// }));

app.use(express.json());

app.post('/dialogflow', sendMessageToIa);

app.listen(5000);