// TODO Rename file and functions according to the collections mentioned in the exam description. Any requests such as gathering all the data from the collection, get only a specific thing from the collection. 
// GET, POST, EDIT, DELETE

import { del, get, post, put } from "./request.js"

// TODO Modify endpoints according to the exam description - change "collection"
const endpoints = {
    all: "/data/solutions?sortBy=_createdOn%20desc",
    byId: "/data/solutions/",
    create: "/data/solutions",
    like: "/data/likes",
    totalLikes: (solutionId) => `/data/likes?where=solutionId%3D%22${solutionId}%22&distinct=_ownerId&count`,
    userLike: (solutionId, userId) => `/data/likes?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
}

export async function getAllSolutions() {
    return get(endpoints.all);
}

export async function getSolutionById(id) {
    return get(endpoints.byId + id);
}

// TODO Enter record properties
// It expects two parameters to create - example await api.create("Harry Poter", "Prisoner of Azkaban")
export async function createSolution(type, imageUrl, description, learnMore) {
    return post(endpoints.create, { type, imageUrl, description, learnMore });
}

export async function updateSolution(id, { type, imageUrl, description, learnMore }) {
    return put(endpoints.byId + id, { type, imageUrl, description, learnMore });
}

export async function deleteSolutionById(id) {
    return del(endpoints.byId + id);
}

export async function likeSolution(solutionId) {
    return post(endpoints.like, { solutionId });
}

export async function getTotalLikes(solutionId) {
    return post(endpoints.totalLikes(solutionId));
}

export async function getUserLike(solutionId, userId) {
    return post(endpoints.userLike(solutionId, userId));
}