const router = require("express").Router();

const Movie = require("../models/movie.model");

router.route("/movies").get(async (req, res) => {
  const movies = await Movie.find();
  const { status } = req.query;
  if (!movies) {
    return res.status(404).json({ message: "No movies found." });
  }

  console.log("status", status);

  if (status) {
    const filteredMovies = movies.filter(
      (movie) => movie.watched === (status === "watched")
    );
    return res.status(200).json({
      message: "Movies retrieved successfully",
      movies: filteredMovies,
    });
  }

  if (movies.length === 0) {
    return res.status(404).json({ message: "No movies found." });
  }

  res.status(200).json({
    message: "Movies retrieved successfully",
    movies,
  });
});

router.route("/movies").post(async (req, res) => {
  const {
    title,
    director = "",
    genre = "",
    releaseYear,
    posterUrl = "",
    watched,
  } = req.body;

  if (!title || !releaseYear) {
    return res
      .status(400)
      .json({ message: "Title and release year are required." });
  }

  if (watched && typeof watched !== "boolean") {
    return res.status(400).json({ message: "Watched must be a boolean." });
  }

  const newMovie = new Movie({
    title,
    director,
    genre,
    releaseYear,
    posterUrl,
    watched,
  });

  await newMovie.save();

  res.status(201).json({
    message: "Movie created successfully",
    movie: newMovie._id,
  });
});

router.route("/movies/:id").get(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Movie ID is required." });
  }

  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).json({ message: "Movie not found." });
  }

  res.status(200).json({
    message: "Movie retrieved successfully",
    movie,
  });
});

router.route("/movies/:id").put(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Movie ID is required." });
  }

  const movie = await Movie.findById(id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found." });
  }

  const {
    title,
    director = "",
    genre = "",
    releaseYear,
    posterUrl = "",
    watched,
  } = req.body;

  if (!title || !releaseYear) {
    return res
      .status(400)
      .json({ message: "Title and release year are required." });
  }

  if (watched && typeof watched !== "boolean") {
    return res.status(400).json({ message: "Watched must be a boolean." });
  }

  movie.title = title;
  movie.director = director;
  movie.genre = genre;
  movie.releaseYear = releaseYear;
  movie.posterUrl = posterUrl;
  movie.watched = watched;
  await movie.save();

  res.status(200).json({
    message: "Movie updated successfully",
    movie,
  });
});

router.route("/movies/:id").delete(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Movie ID is required." });
  }

  const movie = await Movie.findById(id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found." });
  }

  await Movie.findByIdAndDelete(id);

  res.status(200).json({
    message: "Movie deleted successfully",
  });
});

module.exports = router;
