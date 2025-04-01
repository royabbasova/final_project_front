document.addEventListener("DOMContentLoaded", () => {

    const cancelBtn = document.querySelector(".cancel_btn img");
    const confirmBtn = document.querySelector(".confirm button");
    const form = document.querySelector(".add_patient_form");

    cancelBtn.addEventListener("click", () => {
        const modal = document.querySelector(".add_patient_container");
        modal.style.display = "none"; 
    });

    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault(); 

        const name = form.querySelector(".name input").value.trim();
        const surname = form.querySelector(".surname input").value.trim();
        const birthdate = form.querySelector(".birthdate input").value.trim();
        const email = form.querySelector(".email input").value.trim();
        const phone = form.querySelector(".phone input").value.trim();
        const fin = form.querySelector(".fin input").value.trim();

        if (!name || !surname || !birthdate || !email || !phone || !fin) {
            alert("Please fill in all fields.");
            return;
        }

        console.log({
            name,
            surname,
            birthdate,
            email,
            phone,
            fin,
        });

        form.reset();

        const modal = document.querySelector(".add_patient_container");
        modal.style.display = "none";
    });
});