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

const shoppingCart = document.querySelector(".shopping-cart");
shoppingCart.addEventListener("click", () => {
  alert("Fitur belum tersedia!");
});

// Mengatur Accordion pada category card product
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".category_product_card");

  cards.forEach(card => {
    const btn = card.querySelector(".desc-btn");
    const dropdown = card.querySelector(".dropdown-content");
    const title = card.querySelector(".card-title");
    btn.addEventListener("click", () => {
      dropdown.classList.toggle("active");

      if (dropdown.classList.contains("active")) {
        btn.textContent = "Tutup Deskripsi ▲";
        title.scrollIntoView({ behavior: "smooth", block: "center"});
      } else {
        btn.textContent = "Lihat Deskripsi ▼";
      }
    });
  });
});

