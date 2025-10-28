async function loadCategory(category) {
  const res = await fetch("assets/data/sembako.json");
  const data = await res.json();

  const products = data[category]; // ambil array sembako
  renderProducts(products);
}

function renderProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach((p) => {
    container.innerHTML += `
          <div class="product-card">
            <img src="${p.gambar}" alt="${p.nama}" loading="lazy">
            <h3>${p.nama}</h3>
            <p>Rp ${p.harga.toLocaleString("id-ID")}</p>
          <button onclick="addToCart(${p.id}, '${p.nama}', ${p.harga})"> 
              Tambah Ke Keranjang</button>
          </div>
        `;
  });
}
loadCategory("sembako");

document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.querySelector(".shopping-cart");
  const cartModal = document.getElementById("cart-modal");
  const closeCart = document.getElementById("close-cart");

  // Toggle modal
  cartIcon.addEventListener("click", () => {
    cartModal.classList.toggle("show");
  });

  // Close modal (X)
  closeCart.addEventListener("click", () => {
    cartModal.classList.remove("show");
  });

  // Klik di luar konten
  window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.classList.remove("show");
    }
  });
});

let cart = [];
function addToCart(id, nama, harga) {
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, nama, harga, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.harga * item.qty;
    const li = document.createElement("li");
    li.textContent = `${item.nama} x${item.qty} - Rp ${(
      item.harga * item.qty
    ).toLocaleString("id-ID")}`;
    cartItemsContainer.appendChild(li);
  });

  cartCount.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
  cartTotal.textContent = `Total: Rp ${total.toLocaleString("id-ID")}`;
}

// Checkout ke WA
document.getElementById("checkout-btn").addEventListener("click", () => {
  let message = "Halo Faqih Mart, saya ingin pesan:\n\n";
  cart.forEach((item) => {
    message += `- ${item.nama} x${item.qty} = Rp ${(
      item.harga * item.qty
    ).toLocaleString("id-ID")}\n`;
  });
  const total = cart.reduce((sum, i) => sum + i.harga * i.qty, 0);
  message += `\nTotal: Rp ${total.toLocaleString("id-ID")}`;

  const waUrl = `https://wa.me/6289507559445?text=${encodeURIComponent(
    message
  )}`;
  window.open(waUrl, "_blank");
});

