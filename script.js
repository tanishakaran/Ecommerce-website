const products = [
  { id: 1, name: "Smartphone", price: 20000, img: "images/phone.jpg" },
  { id: 2, name: "Laptop", price: 50000, img: "images/laptop.jpg" },
  { id: 3, name: "Bag", price: 1200, img: "images/bag.jpg" },
  { id: 4, name: "Shoes", price: 2500, img: "images/shoes.jpg" },
  { id: 5, name: "Watch", price: 3000, img: "images/watch.jpg" },
  { id: 6, name: "Camera", price: 15000, img: "images/camera.jpg" },
  { id: 7, name: "T-Shirt", price: 800, img: "images/tshirt.jpg" },
  { id: 8, name: "Headphones", price: 1500, img: "images/headphones.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const searchInput = document.getElementById("search");

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(product.name + " added to cart!");
}

function renderProducts(filterText = "") {
  productList.innerHTML = "";
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );
  
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

searchInput.addEventListener("input", (e) => {
  renderProducts(e.target.value);
});

renderProducts();
updateCartCount();
