const menuIcon = document.getElementById("menu-icon");
const pageContent = document.querySelector(".nav-bar");
const sideNav = document.getElementById("hidden-nav");

menuIcon.addEventListener("click", () => {
  pageContent.classList.toggle("menu-active");
  sideNav.classList.toggle("menu-active");
});

const currentPath = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".hidden-nav a");
navLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (href === currentPath) {
    link.classList.add("active");
  }
});

new Typewriter("#paragraph2", {
  strings: ["Front - End  Developer"],

  autoStart: true,
  loop: true,
  delay: 150,
  cursor: " ",
});
