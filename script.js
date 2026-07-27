const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const topbar = document.getElementById("topbar");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 12);
});