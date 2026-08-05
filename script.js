const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzT0ANkDzSjYz4ZraKnnofO3yCMMoZyvaL-IS2Dnrwv4jUUCXkhII1JUyQrMVppwIJt/exec";

// Seller Form
const sellerForm = document.getElementById("sellerForm");

if (sellerForm) {
    sellerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        fetch(SCRIPT_URL, {
            method: "POST",
            body: new FormData(sellerForm)
        })
        .then(() => {
            alert("Seller Registration Submitted Successfully!");
            sellerForm.reset();
        })
        .catch(() => {
            alert("Something went wrong.");
        });
    });
}

// Requirement Form
const requirementForm = document.getElementById("requirementForm");

if (requirementForm) {
    requirementForm.addEventListener("submit", function(e) {
        e.preventDefault();

        fetch(SCRIPT_URL, {
            method: "POST",
            body: new FormData(requirementForm)
        })
        .then(() => {
            alert("Requirement Submitted Successfully!");
            requirementForm.reset();
        })
        .catch(() => {
            alert("Something went wrong.");
        });
    });
}
