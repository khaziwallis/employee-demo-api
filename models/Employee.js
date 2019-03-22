const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
	id: String,
	name: String,
	designation: String
});

let Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;