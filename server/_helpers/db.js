const config = require("../../config.json");
const mongoose = require("mongoose");
require('dotenv').config();
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

console.log("hello",process.env.MONGO_URI);

mongoose
  .connect(
    process.env.MONGO_URI,
    connectionOptions
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

module.exports = {
  User: require("../models/User"),
  Book: require("../models/Book"),
  Category: require("../models/Category"),
  Comment: require("../models/Comment"),
  Marker: require("../models/Marker"),
  BookRating: require("../models/BookRating"),
  CommentRating: require("../models/CommentRating"),
};
