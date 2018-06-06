// JS goes here

let overlay = document.querySelector('.overlay');
let menuButton = document.querySelector('.hamburger');
let closeButton = document.querySelector('.close-btn');

menuButton.addEventListener('click', function() {
  overlay.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
});


const showNav = () => {
    nav.style.position = "fixed";
    nav.style.top = 0;
    nav.style.backgroundColor = "#9DA7B1";
    nav.style.opacity = 0.95;
  };
  const nav = document.querySelector(".navigation");
  window.addEventListener("scroll", showNav);