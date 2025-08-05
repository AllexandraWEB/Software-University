// TODO Rename file and functions according to the collections mentioned in the exam description. Any requests such as gathering all the data from the collection, get only a specific thing from the collection. 
// GET, POST, EDIT, DELETE

import { del, get, post, put } from "./request.js"

// TODO Modify endpoints according to the exam description - change "collection"
const endpoints = {
    all: "/data/shows?sortBy=_createdOn%20desc",
    create: "/data/shows",
    byId: "/data/shows/",
    search: (query) => `/data/shows?where=title%20LIKE%20%22${query}%22`,
}

export async function getAllShows() {
    return get(endpoints.all);
}

export async function getShowById(id) {
    return get(endpoints.byId + id);
}

// TODO Enter record properties
// It expects two parameters to create - example await api.create("Harry Poter", "Prisoner of Azkaban")
export async function createShow(title, imageUrl, genre, country, details) {
    return post(endpoints.create, { title, imageUrl, genre, country, details });
}

export async function updateShow(id, {title, imageUrl, genre, country, details}) {
    return put(endpoints.byId + id, { title, imageUrl, genre, country, details });
}

export async function deleteShowById(id) {
    return del(endpoints.byId + id);
}

export async function searchByQuery(query) {
    return get(endpoints.search(query))
}