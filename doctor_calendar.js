document.addEventListener("DOMContentLoaded", () => {
    const timeButtons = document.querySelectorAll(".time_button");
    let selectedButton = null; 

    timeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (selectedButton) {
                selectedButton.style.backgroundColor = "";
                selectedButton.style.color = ""; 
            }

            selectedButton = button;
            selectedButton.style.backgroundColor = "red"; 
            selectedButton.style.color = "white"; 
        });
    });

    const confirmButton = document.querySelector(".confirm_button");

    confirmButton.addEventListener("click", () => {
        if (selectedButton) {
            selectedButton.disabled = true;
            selectedButton.style.backgroundColor = "red"; 
            selectedButton.style.color = "white";
            selectedButton = null; 
            alert("Time slot confirmed!");
        } else {
            alert("Please select a time slot before confirming.");
        }
    });

    
});