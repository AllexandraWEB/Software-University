import { clearUserData, getUserData } from "../utils/utils.js";

const hostname = "http://localhost:3000";

async function request(method, url, data) {

    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if(userData) {
        options.headers["X-Authorization"] = userData.accessToken;
    }

    const res = await fetch(hostname + url, options);

    if (!res.ok) {
        const error = await res.json()
        console.error(error.message);

        if(error.message == "Invalid access token") { // The message is written in the server. It needs to be cheched for every exercise
            clearUserData();
        }
        //TODO handle invalid access token 401/407
        throw error;
    }

    if (res.status === 204) {
        return res;
    }

    return res.json()
}

export const get = (url) => request("GET", url);
export const post = (url, data) => request("POST", url, data);
export const put = (url, data) => request("PUT", url, data);
export const del = (url) => request("DELETE", url);