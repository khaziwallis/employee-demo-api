const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ManagerSchema = new Schema({
    id: String,
	name: String,
	designation: String
});

let Manager = mongoose.model("Manager", ManagerSchema);

module.exports = Manager;