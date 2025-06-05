function toggle() {
    const buttonRef = document.getElementsByClassName("button")[0];   // Get the button element (only one, so index 0)

    const extraContentRef = document.getElementById("extra");

    if(extraContentRef.style.display === "block") {  // Check current display style
        extraContentRef.style.display = "none" // It's visible — hide it
        buttonRef.textContent = "More";
    } else {
        extraContentRef.style.display = "block"; // It's hidden - show it
        buttonRef.textContent = "Less";
    }
}