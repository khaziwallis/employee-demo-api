
const express = require("express");
let app = express();
var request = require('request');
const bodyParser = require('body-parser');
var employeeRouter = require("./route/employeeRouter.js");
// Body-parser (To parse the request body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "content-type");
	next();
});

app.get('/', (req, res) => {    
    res.send('success test connection');
});

app.get('/listEmployees',employeeRouter.getEmployees);
app.post('/createEmployee', employeeRouter.createEmployee);
app.get('/listManagers',employeeRouter.getManagers);
app.post('/createManager', employeeRouter.createManager);
app.listen(9000);