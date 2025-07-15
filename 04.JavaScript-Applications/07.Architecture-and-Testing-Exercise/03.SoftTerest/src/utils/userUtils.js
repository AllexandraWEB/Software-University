function storeUserData(userData) {
    if(!userData) {
        return;
    }

    sessionStorage.setItem("userData", JSON.stringify({
        email: userData.email,
        id: userData._id,
        accessToken: userData.accessToken
    }));
}

function hasUser() {
    return !!sessionStorage.getItem("userData");
}

function isOwner(id) {
    const user = getUserData();
    return user && user.id === id;
}

function clear() {
    sessionStorage.removeItem("userData");
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem("userData"));
}

export const userUtils = {
    storeUserData,
    hasUser,
    clear,
    getUserData,
    isOwner
}