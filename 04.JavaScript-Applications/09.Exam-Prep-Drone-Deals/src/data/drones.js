// TODO Rename file and functions according to the collections mentioned in the exam description. Any requests such as gathering all the data from the collection, get only a specific thing from the collection. 
// GET, POST, EDIT, DELETE

import { del, get, post, put } from "./request.js"

// TODO Modify endpoints according to the exam description - change "collection"
const endpoints = {
    recent: "/data/drones?sortBy=_createdOn%20desc",
    byId: "/data/drones/",
    create: "/data/drones",
}

export async function getAllDrones() {
    return get(endpoints.recent);
}

export async function getDroneById(id) {
    return get(endpoints.byId + id);
}

// TODO Enter record properties
// It expects two parameters to create - example await api.create("Harry Poter", "Prisoner of Azkaban")
export async function createDrone(
    model,
    imageUrl,
    price,
    condition,
    weight,
    phone,
    description
) {
    return post(endpoints.create, {
        model,
        imageUrl,
        price,
        condition,
        weight,
        phone,
        description
    });
}

export async function updateDrone(id, {
    model,
    imageUrl,
    price,
    condition,
    weight,
    phone,
    description
}) {
    return put(endpoints.byId + id, {
        model,
        imageUrl,
        price,
        condition,
        weight,
        phone,
        description
    });
}

export async function deleteDrone(id) {
    return del(endpoints.byId + id);
}