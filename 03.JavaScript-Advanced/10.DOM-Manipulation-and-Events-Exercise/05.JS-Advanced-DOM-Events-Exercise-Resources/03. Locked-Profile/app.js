function lockedProfile() {
    const buttonRef = document.querySelectorAll("button");

    buttonRef.forEach(button => button.addEventListener("click", showProfile));

    function showProfile(event) {
        const currentButton = event.target;
        const profileRef = event.target.parentElement;

        const hiddenInfo = profileRef.querySelector("div");
        const isLocked = profileRef.querySelector("input[type='radio']:checked").value;

        if(isLocked === "lock") {
            return;
        }

        if(currentButton.textContent === "Show more") {
            currentButton.textContent = "Hide it";
            hiddenInfo.style.display = "block";
        } else {
            currentButton.textContent = "Show more";
            hiddenInfo.style.display = "none";
        }
    }
}