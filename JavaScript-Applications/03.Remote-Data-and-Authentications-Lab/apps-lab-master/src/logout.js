document.getElementById("logoutBtn").addEventListener("click", logOut);

async function logOut() {
    const userData = JSON.parse(sessionStorage.getItem("userData")); 
    if (!userData) {
        location = "/login.html";
        return;
    }

    const url = "http://localhost:3030/users/logout";

    try {
        const options = {
            method: "GET",
            headers: { "X-Authorization": userData.accessToken },
        };

        const res = await fetch(url, options);

        if (res.status !== 204) {
            throw new Error("Logout failed!");
        }

        sessionStorage.removeItem("userData");
        location = "/login.html";

    } catch (error) {
        alert("Error logging out: " + error.message);
        console.error(error);
    }
}