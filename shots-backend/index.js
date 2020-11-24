console.log("hello world");
const express = require('express');
const bodyParser = require('body-parser');
const getCors = require('cors');
// const { mongoose } = require('./db.js');
// const jwt = require('jsonwebtokens');
// app.use(bodyParser.json())
const { mongoose } = require('./dbConnect/dbConnect.js');
var employeeController = require('./routeControllers/routeControllers.js');
var app = express();
app.use(bodyParser.json());

app.use(getCors());
app.use(getCors({ origin : 'http://localhost:4200'}));
app.listen(3000, () => console.log('server started at port : 3000'));

app.use('/jay', employeeController);

