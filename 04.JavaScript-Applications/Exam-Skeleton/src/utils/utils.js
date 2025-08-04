//  Gets user data stored in sessionStorage, and convert it from a JSON string back into an object
 export function getUserData() {
    return JSON.parse(sessionStorage.getItem("userData")); // sessionStorage.getItem("userData") returns a string, JSON.parse(...) converts that string back into a JavaScript object
 }
// Saves user data into sessionStorage as a JSON string under the key "userData".
 export function setUserData(data) {
    return sessionStorage.setItem("userData", JSON.stringify(data)); // sessionStorage.setItem("userData", ...) saves that string under the key "userData" in the browser's session storage
 }
// Clears the user data from session storage
 export function clearUserData() {
    return sessionStorage.removeItem("userData"); // Removes the "userData" item from sessionStorage.
 }

//  export function updateNav() {
//    const userData = getUserData();

//    document.querySelector(".user").style.display = userData ? "" : "none";
//    document.querySelector(".guest").style.display = userData ? "none" : "";
// }