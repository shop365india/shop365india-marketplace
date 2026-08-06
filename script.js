const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyndczHHa9Z4VM4eysGbbm1PnY94wuWOLCjz-1HIHdJHLe39RNq4rw85ViSpH9xYxyr/exec";

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

// Product Form
const productForm = document.getElementById("productForm");

if (productForm) {
    productForm.addEventListener("submit", function(e) {
        e.preventDefault();

        fetch(SCRIPT_URL, {
            method: "POST",
            body: new URLSearchParams(new FormData(productForm))
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            productForm.reset();
        })
        .catch(error => {
            alert(error);
            console.error(error);
        });
    });
}
