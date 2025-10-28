const selectBody = document.querySelector("body");
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

function toggleScrolled() {
  if (window.scrollY > 1) {
    selectBody.classList.add("scrolled");
  } else if (!menuList.classList.contains("hidden")) {
    // Jika menu terbuka, tetap beri tema
    selectBody.classList.add("scrolled");
  } else {
    // Jika menu tertutup dan posisi top → kembalikan normal
    selectBody.classList.remove("scrolled");
  }
}

document.addEventListener("scroll", toggleScrolled);

// toggle menu & theme saat menu diklik
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  toggleScrolled(); // panggil ulang fungsi untuk sinkronisasi state
});

// Mengatur Accordion pada category card product
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".category_product_card");

  cards.forEach((card) => {
    const btn = card.querySelector(".desc-btn");
    const dropdown = card.querySelector(".dropdown-content");
    const title = card.querySelector(".card-title");
    btn.addEventListener("click", () => {
      dropdown.classList.toggle("active");

      if (dropdown.classList.contains("active")) {
        btn.textContent = "Tutup Deskripsi ▲";
        title.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        btn.textContent = "Lihat Deskripsi ▼";
      }
    });
  });
});

// lazy loading
