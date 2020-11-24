const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { mongoose } = require('./db.js');
const  {mongoose} = require('./db.js');
var employeeController = require('./controllers/employeeControllers.js');
var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({l}))
app.use(cors());
app.use(cors({ origin : 'http://localhost:4200'}));
app.listen(2000, () => console.log('server started at port : 2000'));

app.use('/jays', employeeController);