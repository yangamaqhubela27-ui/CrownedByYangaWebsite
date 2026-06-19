document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("bookingName").value;
            const email = document.getElementById("bookingEmail").value;
            const service = document.getElementById("bookingService").value;
            const date = document.getElementById("bookingDate").value;
            const response = document.getElementById("bookingResponse");

            if (name === "" || email === "" || service === "" || date === "") {
                response.textContent = "Please complete all required fields.";
                response.style.color = "red";
            } else {
                response.textContent = "Thank you, " + name + "! Your " + service + " booking enquiry has been submitted.";
                response.style.color = "green";
                bookingForm.reset();
            }
        });
    }

});
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value;
        const type = document.getElementById("messageType").value;

        document.getElementById("contactResponse").innerHTML =
            `Thank you, ${name}! Your ${type.toLowerCase()} has been sent successfully.`;

        contactForm.reset();
    });
}

const serviceSearch = document.getElementById("serviceSearch");

if (serviceSearch) {
    serviceSearch.addEventListener("keyup", function () {
        const searchText = serviceSearch.value.toLowerCase();
        const serviceCards = document.querySelectorAll(".service-card");

        serviceCards.forEach(function (card) {
            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}
