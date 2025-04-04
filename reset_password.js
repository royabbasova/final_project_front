document.addEventListener("DOMContentLoaded", () => {
    const resetBtn = document.querySelector("#reset_btn");
    const newPasswordInput = document.querySelector("input[placeholder='New password']");
    const confirmPasswordInput = document.querySelector("input[placeholder='Confirm password']");

    resetBtn.addEventListener("click", (event) => {
        event.preventDefault(); 

        const newPassword = newPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (newPassword === confirmPassword) {
            const confirmAction = confirm("Passwords match. Do you want to proceed?");
            if (confirmAction) {
                window.location.href = "login_doctor.html";
            }
        } else {
            alert("Passwords do not match. Please try again.");
        }
    });
});