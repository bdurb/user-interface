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
