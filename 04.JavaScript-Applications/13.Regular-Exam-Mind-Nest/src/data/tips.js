import { del, get, post, put } from "./request.js"

const endpoints = {
    all: "/data/mindfultips?sortBy=_createdOn%20desc",
    byId: "/data/mindfultips/",
    create: "/data/mindfultips",
}

export async function getAllTips() {
    return get(endpoints.all);
}

export async function getTipById(id) {
    return get(endpoints.byId + id);
}

export async function createTip(title, imageUrl, type, difficulty, description) {
    return post(endpoints.create, { title, imageUrl, type, difficulty, description });
}

export async function updateTip(id, { title, imageUrl, type, difficulty, description }) {
    return put(endpoints.byId + id, { title, imageUrl, type, difficulty, description });
}

export async function deleteTipById(id) {
    return del(endpoints.byId + id);
}