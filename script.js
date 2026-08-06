const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxli2EBQXMm0KLzjSr_12VRh6aOD2ANjEZ6pY2hPiG3aGS3aZvHHmVDIcuPynik07-b/exec";

// ================= SELLER FORM =================
const sellerForm = document.getElementById("sellerForm");

if (sellerForm) {
    sellerForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const response = await fetch(SCRIPT_URL,{
            method:"POST",
            body:new FormData(sellerForm)
        });

        alert(await response.text());
        sellerForm.reset();
    });
}

// ================= REQUIREMENT FORM =================
const requirementForm = document.getElementById("requirementForm");

if (requirementForm) {
    requirementForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const response = await fetch(SCRIPT_URL,{
            method:"POST",
            body:new FormData(requirementForm)
        });

        alert(await response.text());
        requirementForm.reset();
    });
}

// ================= PRODUCT FORM =================
const productForm = document.getElementById("productForm");

if (productForm) {

productForm.addEventListener("submit", async function(e){

e.preventDefault();

const response = await fetch(SCRIPT_URL,{

method:"POST",

body:new URLSearchParams(new FormData(productForm))

});

alert(await response.text());

productForm.reset();

});

}

// ================= LOAD PRODUCTS =================

const productGrid=document.getElementById("productGrid");

if(productGrid){

loadProducts();

}

async function loadProducts() {

    const res = await fetch(SCRIPT_URL + "?action=products", {
    redirect: "follow",
    cache: "no-store"
});

    console.log(res.status);

    const data = await res.json();

    console.log(data);

    productGrid.innerHTML = "";

    data.reverse();

    data.forEach(p => {

      productGrid.innerHTML += `
<div class="product-card">

<a href="product.html?id=${encodeURIComponent(p.product)}"
style="text-decoration:none;color:inherit;display:block;">

<div class="product-card">

<img src="${p.image || 'https://via.placeholder.com/300x220?text=No+Image'}" alt="${p.product}">

<h3>${p.product}</h3>

<p>${p.category}</p>

</a>

<a href="https://wa.me/919310842024?text=I want to buy ${encodeURIComponent(p.product)}"
target="_blank">

<button type="button" class="wa-btn">WhatsApp</button>

</a>

</div>
</div>

</a>
`;
    });

}
// ================= PRODUCT DETAILS =================

const details = document.getElementById("productDetails");

if (details) {

    loadProductDetails();

}

async function loadProductDetails() {

    const params = new URLSearchParams(window.location.search);

    const productName = params.get("id");

    const res = await fetch(SCRIPT_URL + "?action=products");

    const data = await res.json();

    const product = data.find(p => p.product === productName);

    if (!product) {

        details.innerHTML = "<h2>Product Not Found</h2>";

        return;

    }

    details.innerHTML = `
        <div class="product-card" style="max-width:700px;margin:auto;">

            <img src="${product.image}" style="width:100%;max-height:400px;object-fit:cover;">

            <h2>${product.product}</h2>

            <p><b>Category:</b> ${product.category}</p>

            <p><b>Brand:</b> ${product.brand}</p>

            <h3>₹ ${product.price}</h3>

            <p>${product.description}</p>

            <a href="https://wa.me/919310842024?text=I want to buy ${encodeURIComponent(product.product)}" target="_blank">

                <button class="wa-btn">WhatsApp Enquiry</button>

            </a>

        </div>
    `;

}
