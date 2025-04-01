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
        const date = form.querySelector(".date input").value.trim();
        const time = form.querySelector(".time input").value.trim();

        if (!name || !surname || !birthdate || !date || !time) {
            alert("Please fill in all fields.");
            return;
        }

        console.log({
            name,
            surname,
            birthdate,
            date,
            time,
        });

        form.reset();

        const modal = document.querySelector(".add_patient_container");
        modal.style.display = "none";
    });
});