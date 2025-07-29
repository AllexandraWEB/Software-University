// TODO Rename file and functions according to the collections mentioned in the exam description. Any requests such as gathering all the data from the collection, get only a specific thing from the collection. 
// GET, POST, EDIT, DELETE

import { del, get, post, put } from "./request.js"

// TODO Modify endpoints according to the exam description - change "collection"
const endpoints = {
    all: "/data/collection",
    byId: "/data/collection/",
}

export async function getAll() {
    return get(endpoints.all);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

// TODO Enter record properties
// It expects two parameters to create - example await api.create("Harry Poter", "Prisoner of Azkaban")
export async function create(prop1, prop2) {
    return post(endpoints.all, { prop1, prop2 });
}

export async function update(id, record) {
    return put(endpoints.byId + id, record);
}

export async function deleteById(id) {
    return del(endpoints.byId + id);
}