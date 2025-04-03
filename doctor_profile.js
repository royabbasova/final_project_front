document.addEventListener("DOMContentLoaded", () => {
    const profileIcon = document.querySelector(".p_icon");
    const profileModal = document.querySelector("#profile_modal");

    profileIcon.addEventListener("click", () => {
        if (profileModal.style.display === "none" || !profileModal.style.display) {
            profileModal.style.display = "block"; 
        } else {
            profileModal.style.display = "none"; 
        }
    });

    document.addEventListener("click", (event) => {
        if (!profileModal.contains(event.target) && event.target !== profileIcon) {
            profileModal.style.display = "none"; 
        }
    });
});
