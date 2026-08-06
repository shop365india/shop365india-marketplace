https://script.google.com/macros/s/AKfycbyndczHHa9Z4VM4eysGbbm1PnY94wuWOLCjz-1HIHdJHLe39RNq4rw85ViSpH9xYxyr/exec

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
    productForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        try {

            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: new URLSearchParams(new FormData(productForm)),
                redirect: "follow"
            });

            const text = await response.text();

            alert("Product Added Successfully!");
            console.log(text);

            productForm.reset();

        } catch (err) {
            console.error(err);
            alert("Error: " + err.message);
        }
    });
}
