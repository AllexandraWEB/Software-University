// TODO Rename file and functions according to the collections mentioned in the exam description. Any requests such as gathering all the data from the collection, get only a specific thing from the collection. 
// GET, POST, EDIT, DELETE

import { del, get, post, put } from "./request.js"

// TODO Modify endpoints according to the exam description - change "collection"
const endpoints = {
    all: "/data/motorcycles?sortBy=_createdOn%20desc",
    byId: "/data/motorcycles/",
    create: "/data/motorcycles",
    search: (query) => `/data/motorcycles?where=model%20LIKE%20%22${query}%22`
}

export async function getAllMotorcycles() {
    return get(endpoints.all);
}

export async function getMotorcycleById(id) {
    return get(endpoints.byId + id);
}

// TODO Enter record properties
// It expects two parameters to create - example await api.create("Harry Poter", "Prisoner of Azkaban")
export async function createMotorcycle(model, imageUrl, year, mileage, contact, about) {
    return post(endpoints.create, { model, imageUrl, year, mileage,contact, about });
}

export async function updateMotorcycle(id, { model, imageUrl, year, mileage, contact, about }) {
    return put(endpoints.byId + id, { model, imageUrl, year, mileage,contact, about });
}

export async function deleteMotorcycleById(id) {
    return del(endpoints.byId + id);
}

export async function searchByQuery(query) {
    return get(endpoints.search(query))
}