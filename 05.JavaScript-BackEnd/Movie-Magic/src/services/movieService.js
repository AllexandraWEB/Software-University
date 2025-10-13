import Movie from "../models/Movie.js";

export default {
     getAll(filter) {
        // First way to solve the issue with handlebars - used .lean()
        // const result = await Movie.find(filter).lean();

        // Second way to solve the issue with handlebars - added allowProtoMethodsByDefault and allowProtoPropertiesByDefault
        let query = Movie.find();

        if (filter.title) {
            // TODO Search by title, partial match, case insensitive
            query = query.filter(movie => movie.title.toLowerCase().includes(filter.title.toLowerCase()))
        }

        if (filter.genre) {
            // TODO Search by genre, exact match, case insensitive
            query = query.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
        }

        if (filter.year) {
            query = query.where("year").equals(filter.year) // Mongoose variant
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
    }
}
