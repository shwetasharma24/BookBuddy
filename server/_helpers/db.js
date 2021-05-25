const config = require("../../config.json");
const mongoose = require("mongoose");
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(
    'mongodb+srv://dbUser:dbUser@cluster0.l8caq.mongodb.net/onlibraryDB?retryWrites=true&w=majority',
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
