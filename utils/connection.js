const mongoose = require("mongoose");
const Employee = require("../models/Employee.js");
const Manager = require('../models/Manager');
/*
const config = {
    'dbPath' : 'mongodb+srv://khazi:khaz123@cluster0-scusj.mongodb.net/test?retryWrites=true'
};*/

const config = {
	'dbPath': 'mongodb://localhost:27017/employeedb'
};


exports.connectToDb = function(callback) {
	if (mongoose.connection.readyState) {
		callback(undefined, {msg: "connected", code: 200});
		return;
	}
	mongoose.connect(config.dbPath);
	mongoose.connection.on("connected", function () {
		callback(undefined, {msg: "connected", code: 200});
	});
	mongoose.connection.on("error",function (err) {
		console.log("[connectToDb] Error connecting to DB " + err);
		callback(err);
	});
};

exports.getEmployees = function (callback) {
	Employee.find({}, function (err, result) {
		if (err) {
			callback(err);
			return;
		}
		callback(undefined, result);
	});
};

exports.addEmployee = function (data, callback) {
	var employee = new Employee({
		id: data.id,
		name: data.name,
		designation: data.designation
	});
	employee.save(function (err, result) {
		if (err) {
			callback(err);
			return;
		}
		callback(undefined, result);
	});
};

exports.getManagers = function (callback) {
	Manager.find({}, function (err, result) {
		console.log(err, 'retrived....', result);
		if (err) {
			callback(err);
			return;
		}
		callback(undefined, result);
	});
};

exports.addManager = function (data, callback) {
	var manager = new Manager({
		id: data.id,
		name: data.name,
		designation: data.designation
	});
	manager.save(function (err, result) {
		console.log(err, 'written to db....', result);
		if (err) {
			callback(err);
			return;
		}
		callback(undefined, result);
	});
};
