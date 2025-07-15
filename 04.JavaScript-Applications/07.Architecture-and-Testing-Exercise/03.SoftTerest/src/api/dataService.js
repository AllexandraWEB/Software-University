import { api } from "./requester.js"

const endpoint = {
    getAll: "http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    create: "http://localhost:3030/data/ideas",
    details: "http://localhost:3030/data/ideas/",
    delete: "http://localhost:3030/data/ideas/"
}

async function getAll() {
    return await api.get(endpoint.getAll);
}

async function getIdea(id) {
    return await api.get(endpoint.details + id); 
}

async function createIdea(data) {
    return await api.post(endpoint.create, data);
}

async function deleteIdea(id) {
    return await api.del(endpoint.delete + id);
}

export const dataService = {
    getAll,
    getIdea,
    createIdea,
    deleteIdea
}