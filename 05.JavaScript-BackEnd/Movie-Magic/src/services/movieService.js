import Movie from "../models/Movie.js";

export default {
  getAll(filter = {}) {
    // First way to solve the issue with handlebars - used .lean()
    // const result = await Movie.find(filter).lean();

    // Second way to solve the issue with handlebars - added allowProtoMethodsByDefault and allowProtoPropertiesByDefault
    let query = Movie.find();

    if (filter.title) {
      query = query.find({ title: { $regex: filter.title, $options: "i" } }); // Search by title, partial match, case insensitive
    }

    if (filter.genre) {
      // Search by genre, exact match, case insensitive
      query = query.find({
        genre: { $regex: new RegExp(`^${filter.genre}$`), $options: "i" },
      }); // It will find exact matches, not case sensitive
    }

    if (filter.year) {
      // Search by year, exact match
      query = query.where("year").equals(filter.year); // Mongoose variant
      // MongoDB variant
      // result = result.find({year: filter.year})
    }

    return query;
  },
  getOne(movieId) {
    // return Movie.findOne({_id: movieId});

    // Use this instead
    return Movie.findById(movieId);
  },
  create(movieData) {
    movieData.rating = Number(movieData.rating);

    return Movie.create(movieData);

    // or we can use instead
    // const movie = new Movie(movieData);
    // return movie.save();
  },
};
