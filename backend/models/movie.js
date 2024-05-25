const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  year: String,
  genre: String,
  synopsis: String,
  poster: String,
});

module.exports = mongoose.model("Movie", movieSchema);
