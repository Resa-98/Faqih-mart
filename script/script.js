// change theme header on scroll
function toggleScrolled() {
  const selectBody = document.querySelector("body");
  window.scrollY > 110
    ? selectBody.classList.add("scrolled")
    : selectBody.classList.remove("scrolled");
}
document.addEventListener("scroll", toggleScrolled);

// mobile menu icon
const menuIcon = document.getElementById("menu-icon");
const selectBody = document.querySelector("body");
const menuList = document.getElementById("menu-list");
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
