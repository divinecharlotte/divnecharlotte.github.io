const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger2');
const hideMenu = document.getElementById('closeMenuIcon');
const closeMenu = document.getElementById('navItems');
burger.onclick = function burger() {
  navLinks.style.left = '0';
};
hideMenu.onclick = function hideMenu() {
  navLinks.style.left = '-100%';
};

closeMenu.onclick = function hideMenu() {
  navLinks.style.left = '-100%';
};
