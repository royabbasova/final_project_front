document.addEventListener("DOMContentLoaded", () => {

    const saveButton = document.querySelector("#save_btn");
    const changePhotoButton = document.querySelector("#change");
    const deletePhotoButton = document.querySelector("#bin");
    const profilePhoto = document.querySelector(".profile_photoB");
    const formInputs = document.querySelectorAll(".doctor_data input");

    saveButton.addEventListener("click", (event) => {
        event.preventDefault();

        const formData = {};
        formInputs.forEach((input) => {
            if (input.name) {
                formData[input.name] = input.value.trim();
            }
        });

        console.log("Saved Data:", formData);

        alert("Changes saved successfully!");
    });

    changePhotoButton.addEventListener("click", (event) => {
        event.preventDefault(); 

        const newPhotoUrl = prompt("Enter the URL of the new profile photo:");
        if (newPhotoUrl) {
            profilePhoto.src = newPhotoUrl; 
            alert("Profile photo updated!");
        }
    });

    deletePhotoButton.addEventListener("click", (event) => {
        event.preventDefault(); 

        const confirmDelete = confirm("Are you sure you want to delete the profile photo?");
        if (confirmDelete) {
            profilePhoto.src = "./images/default_profile.png";
            alert("Profile photo deleted!");
        }
    });
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}