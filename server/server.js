const db = require("./db");

const PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const routes = require("./routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
db.on("error", console.error.bind(console, "MongoDB connection error."));
app.use(logger("dev"));
app.use("/api", routes);



app.listen(PORT, () => console.log("Listening on Port " + PORT));


