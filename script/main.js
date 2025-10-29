const body = document.body;
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

function updateTheme() {
  const isScrolled = window.scrollY > 1;
  const isMenuOpen = !menuList.classList.contains("hidden");

  if (isScrolled || isMenuOpen) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
}

document.addEventListener("scroll", updateTheme);

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  body.classList.toggle("menu-open"); // aktifkan blur di mobile
  updateTheme();
});

// Tutup menu saat klik link
document.querySelectorAll("#menu-list a").forEach((link) => {
  link.addEventListener("click", () => {
    menuList.classList.add("hidden");
    body.classList.remove("menu-open");
    updateTheme();
  });
});

// Tutup menu saat klik di luar menu dan ikon
document.addEventListener("click", (e) => {
  const isClickInsideMenu = menuList.contains(e.target);
  const isClickOnMenuIcon = menuIcon.contains(e.target);

  if (!isClickInsideMenu && !isClickOnMenuIcon) {
    if (!menuList.classList.contains("hidden")) {
      menuList.classList.add("hidden");
      body.classList.remove("menu-open");
      updateTheme();
    }
  }
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
