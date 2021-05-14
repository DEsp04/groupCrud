const mongoose = require("mongoose");
require("dotenv").config();



let MONGODB_URI = process.env.PROD_MONGODB || process.MONGODB || process.env.DB_Cluster_URL;

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
	console.log("Successfully connected to MongoDB.");
});
console.log(MONGODB_URI);


const db = mongoose.connection;

module.exports = db;