document.addEventListener("DOMContentLoaded", () => {

    const signUpBtn = document.querySelector(".btn_signup");
    const cancelBtn = document.querySelector(".btn_cancel");
    const passwordFields = document.querySelectorAll(".password_container input");
    const eyeIcons = document.querySelectorAll(".password_container img");
    const form = document.querySelector("form");

    eyeIcons.forEach((icon, index) => {
        icon.addEventListener("click", () => {
            const passwordField = passwordFields[index];
            if (passwordField.type === "password") {
                passwordField.type = "text";
                icon.src = "./images/eyeicon-open.png";
            } else {
                passwordField.type = "password";
                icon.src = "./images/eyeicon.png"; 
            }
        });
    });

    signUpBtn.addEventListener("click", (event) => {
        event.preventDefault(); 

        const firstName = document.querySelector("#first_name").value.trim();
        const lastName = document.querySelector("#last_name").value.trim();
        const birthday = document.querySelector("#birthday").value.trim();
        const finCode = document.querySelector("#fin_code").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phoneCode = document.querySelector("#phone_code").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const password = document.querySelector("#password").value.trim();
        const confirmPassword = document.querySelector("#confirm_password").value.trim();
        const rememberMe = document.querySelector("#remember_me").checked;

        if (!firstName || !lastName || !birthday || !finCode || !email || !phone || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        console.log({
            firstName,
            lastName,
            birthday,
            finCode,
            email,
            phone: `${phoneCode} ${phone}`,
            password,
            rememberMe,
        });

        form.reset();
    });

    cancelBtn.addEventListener("click", (event) => {
        event.preventDefault();
        form.reset();
    });
});