const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
    },
    genre: {
      type: String,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    posterUrl: {
      type: String,
    },
    watched: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
