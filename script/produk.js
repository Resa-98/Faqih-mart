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
            <img src="${p.gambar}" alt="${p.nama}">
            <h3>${p.nama}</h3>
            <p>Rp ${p.harga.toLocaleString()}</p>
          <button> <a
              href="https://wa.me/6289507559445?text=Halo%20Faqih%20Mart,%20saya%20ingin%20pesan%20produk!">Beli Sekarang</a></button>
          </div>
        `;
  });
}

loadCategory("sembako");
