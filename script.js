const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyndczHHa9Z4VM4eysGbbm1PnY94wuWOLCjz-1HIHdJHLe39RNq4rw85ViSpH9xYxyr/exec";

// ================= SELLER FORM =================
const sellerForm = document.getElementById("sellerForm");

if (sellerForm) {
    sellerForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: new URLSearchParams(new FormData(sellerForm))
            });

            const text = await response.text();

            alert(text);
            sellerForm.reset();

        } catch (err) {
            console.error(err);
            alert("Error : " + err.message);
        }
    });
}


// ================= REQUIREMENT FORM =================
const requirementForm = document.getElementById("requirementForm");

if (requirementForm) {
    requirementForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: new URLSearchParams(new FormData(requirementForm))
            });

            const text = await response.text();

            alert(text);
            requirementForm.reset();

        } catch (err) {
            console.error(err);
            alert("Error : " + err.message);
        }
    });
}


// ================= PRODUCT FORM =================
const productForm = document.getElementById("productForm");

if (productForm) {
    productForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: new URLSearchParams(new FormData(productForm))
            });

            const text = await response.text();

            alert(text);
            productForm.reset();

        } catch (err) {
            console.error(err);
            alert("Error : " + err.message);
        }
    });
}
