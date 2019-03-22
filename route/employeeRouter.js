const connection = require("../utils/connection.js");

exports.getEmployees = function (req, res) {
    connection.connectToDb(function (error) {
		if (error) {
			return res.status(500).json({msg: "Error connecting to db", status: "CONNECTION_ERROR"});
    }
    console.log('connection succesfull...');
		connection.getEmployees(function (err, success) {
			if (err) {
				res.status(500).json({msg: "Error rereiving the info",  status: "CONNECTION_ERROR"});
				return;
			}
			res.status(200).json({doc: success});
		});
	});
};

exports.createEmployee = function (req, res) {
    connection.connectToDb(function (error) {
		if (error) {
			return res.status(500).json({msg: "Error connecting to db", status: "CONNECTION_ERROR"});
        }
		console.log('connection succesfull...', req.body.id.toString());
		if (req.body) {
			data =  {
				id: req.body.id.toString(),
				name: req.body.name,
				designation: req.body.designation
			};
		}
		connection.addEmployee(data, function (err, success) {
			if (err) {
				res.status(500).json({msg: "Error rereiving the info",  status: "CONNECTION_ERROR"});
				return;
			}
			res.status(200).json({doc: success});
		});
	});
}

exports.getManagers = function (req, res) {
    connection.connectToDb(function (error) {
		if (error) {
			return res.status(500).json({msg: "Error connecting to db", status: "CONNECTION_ERROR"});
    }
    console.log('connection succesfull..');
		connection.getManagers(function (err, success) {
			if (err) {
				res.status(500).json({msg: "Error rereiving the info",  status: "CONNECTION_ERROR"});
				return;
			}
			res.status(200).json({doc: success});
		});
	});
};

exports.createManager = function (req, res) {
    connection.connectToDb(function (error) {
		if (error) {
			return res.status(500).json({msg: "Error connecting to db", status: "CONNECTION_ERROR"});
        }
		console.log('connection succesfull...', req.body.id.toString());
		if (req.body) {
			data =  {
				id: req.body.id.toString(),
				name: req.body.name,
				designation: req.body.designation
			};
		}
		connection.addManager(data, function (err, success) {
			if (err) {
				res.status(500).json({msg: "Error rereiving the info",  status: "CONNECTION_ERROR"});
				return;
			}
			res.status(200).json({doc: success});
		});
	});
}