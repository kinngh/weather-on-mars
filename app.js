//Libraries
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config(); //read from the .env file

//Files and folders
const { notFound, errorHandler } = require("./middleware");
const weather = require("./weather");

//Express and setup
const express = require("express");
const app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());

app.use("/api/weather", weather);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
