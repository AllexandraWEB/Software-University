import { userUtils } from "../utils/userUtils.js";
import { api } from "./requester.js"

const endpoints = {
    register: "http://localhost:3030/users/register",
    login: "http://localhost:3030/users/login",
    logout: "http://localhost:3030/users/logout",
}

async function register(data) {
    const userData = await api.post(endpoints.register, data);
    return userUtils.storeUserData(userData);
}

async function login(data) {
    const userData = await api.post(endpoints.login, data);
    return userUtils.storeUserData(userData);

}

async function logout() {
    await api.get(endpoints.logout);
    return userUtils.clear();
}

export const userService = {
    register,
    login,
    logout
}