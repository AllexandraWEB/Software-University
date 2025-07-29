import { clearUserData, setUserData } from "../utils/utils.js";
import { get, post } from "./request.js";

const endpoints = {
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout"
}

// TODO: Change the indentity based on the exam description
export async function login(email, password) { // Instead of email, it could be username instead
    const result = await post(endpoints.login, { email, password });

    const userData = {
        id: result._id,
        accessToken: result.accessToken
    };

    setUserData(userData);
}

// TODO: Change the indentity based on the exam description
export async function register(email, password) {
    const result = await post(endpoints.register, { email, password });

    const userData = {
        id: result._id,
        accessToken: result.accessToken
    };

    setUserData(userData);
}

export function logout() {
    get(endpoints.logout);
    clearUserData();
}