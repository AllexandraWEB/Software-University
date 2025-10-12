import Movie from "../models/Movie.js";

export default {
    async getAll(filter) {
        // First way to solve the issue with handlebars - used .lean()
        // const result = await Movie.find(filter).lean();

        // Second way to solve the issue with handlebars - added allowProtoMethodsByDefault and allowProtoPropertiesByDefault
        const result = await Movie.find(filter);

        return result;
    },
    getOne(movieId) {
        return Movie.findOne({_id: movieId});
    },
    create(movieData) {
        movieData.rating = Number(movieData.rating);

        return Movie.create(movieData);

        // or we can use instead
        // const movie = new Movie(movieData);
        // return movie.save();
    }
}
