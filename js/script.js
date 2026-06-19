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
