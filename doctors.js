document.addEventListener("DOMContentLoaded", () => {
    const doctorNames = document.querySelectorAll("#doctor_name a");
    const bookVisitButtons = document.querySelectorAll("#visit_btn");

    const showModal = (contentUrl, isCalendar = false) => {

        const modal = document.createElement("div");
        modal.classList.add("modal");

        modal.innerHTML = `
            <div class="modal_content">
                <iframe src="${contentUrl}" frameborder="0"></iframe>
            </div>
        `;

        document.body.appendChild(modal);

        const iframe = modal.querySelector("iframe");
        iframe.addEventListener("load", () => {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

            const cancelButton = iframeDocument.querySelector(".cancel");
            if (cancelButton) {
                cancelButton.addEventListener("click", () => {
                    modal.remove();
                });
            }

            const hideButton = iframeDocument.querySelector(".hide");
            if (hideButton) {
                hideButton.addEventListener("click", () => {
                    modal.remove();
                });
            }
        });
    };

    doctorNames.forEach((doctorName) => {
        doctorName.addEventListener("click", (event) => {
            event.preventDefault();
            showModal("./doctor_details.html"); 
        });
    });

    bookVisitButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); 
            showModal("./doctor_calendar.html", true);
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}