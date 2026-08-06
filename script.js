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

async function loadProducts(){

const res=await fetch(SCRIPT_URL+"?action=products");

const data=await res.json();

productGrid.innerHTML="";

data.reverse();

data.forEach(p=>{

productGrid.innerHTML+=`

<div class="product-card">

<img src="https://via.placeholder.com/250x180?text=${encodeURIComponent(p.product)}">

<h3>${p.product}</h3>

<p>${p.category}</p>

<h4>₹ ${p.price}</h4>

<p>${p.brand}</p>

<a target="_blank"

href="https://wa.me/919310842024?text=I want to buy ${encodeURIComponent(p.product)}">

<button class="wa-btn">WhatsApp</button>

</a>

</div>

`;

});

}

// ================= SEARCH =================

function searchProducts(){

let text=document.getElementById("searchBox").value.toLowerCase();

let cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(text))

card.style.display="block";

else

card.style.display="none";

});

}
