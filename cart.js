let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
  });
  totalPrice.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();
  if(cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // clear cart
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  // redirect to thank you page
  window.location.href = "thankyou.html";
});

renderCart();
