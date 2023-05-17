//hamburgermenu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// navmenu verdwijnt bij scrollen
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navheader").style.top = "0";
  } else {
    document.getElementById("navheader").style.top = "-76px";
  }
  prevScrollpos = currentScrollPos;
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


