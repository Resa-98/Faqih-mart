// ganti header style saat scroll
function toggleScrolled() {
  const selectBody = document.querySelector("body");
  window.scrollY > 110
    ? selectBody.classList.add("scrolled")
    : selectBody.classList.remove("scrolled");
}
document.addEventListener("scroll", toggleScrolled);

// hamburger menu icon
const menuIcon = document.getElementById("menu-icon");
const selectBody = document.querySelector("body");
const menuList = document.getElementById("menu-list");
const headerNav = document.querySelector("header");
menuIcon.addEventListener("click", () => {
  const isHidden = menuList.classList.toggle("hidden");

  if (!isHidden) {
    selectBody.classList.add("scrolled");
  } else {
    if (window.scrollY < 110) {
      selectBody.classList.remove("scrolled");
    }
  }
});
// tutup menu otomatis ketika anchor link di klik
const navLinks = document.querySelectorAll("#menu-list a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuList.classList.add("hidden");
  });
});
// tutup menu otomatis saat klik di luar menu dan ikon menu
document.addEventListener("click", function (e) {
  const target = e.target;

  const isClickInsideMenu = menuList.contains(target);
  const isClickOnMenuIcon = menuIcon.contains(target);

  if (
    !menuList.classList.contains("hidden") &&
    !isClickInsideMenu &&
    !isClickOnMenuIcon
  ) {
    menuList.classList.add("hidden");
    selectBody.classList.remove("scrolled");
  }
});

// modal produk

const brandData = {
  unilever: [
    {
      nama: "Kecap Bango 200ml",
      gambar: "assets/img/produk/kecapbango.jpg",
      wa: "https://wa.me/6289507559445?text=Saya%20mau%20pesan%20Kecap%20Bango.",
    },
    {
      nama: "Lifebuoy sabun batang",
      gambar: "assets/img/produk/lifebuoy.png",
      wa: "https://wa.me/6289507559445?text=Saya%20mau%20pesan%20Lifebouy.",
    },
  ],
};

// ========================
// LOGIKA MODAL PRODUK
// ========================
const brandLogos = document.querySelectorAll(".brand-logo");
const modal = document.getElementById("brandModal");
const brandTitle = document.getElementById("brandTitle");
const brandProducts = document.getElementById("brandProducts");
const closeButton = document.querySelector(".close-button");

brandLogos.forEach((logo) => {
  logo.addEventListener("click", () => {
    const brandKey = logo.getAttribute("data-brand");

    const produkList = brandData[brandKey];

    // Format judul: kapitalisasi
    const namaBrandTampil = brandKey
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    brandTitle.textContent = `Produk ${namaBrandTampil}`;

    // Tampilkan daftar produk
    brandProducts.innerHTML =
      produkList && produkList.length > 0
        ? produkList
            .map(
              (p) => `
          <div class="produk-item">
            <img src="${p.gambar}" alt="${p.nama}" />
            <div class="info">
              <h4>${p.nama}</h4>
            </div>
            <a href="${p.wa}" target="_blank">Beli</a>
          </div>
        `
            )
            .join("")
        : "<p>Produk belum tersedia.</p>";

    modal.classList.remove("hidden");
  });
});

// Tutup modal saat klik tombol ×
closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Tutup modal jika klik di luar konten modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
