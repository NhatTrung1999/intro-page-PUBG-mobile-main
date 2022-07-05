// Slides Image
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// Chang Image
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("switches");
  var dots = document.getElementsByClassName("show");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" off-img", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " off-img";
}

// Open and Close Popup
const btnOpen = document.querySelector(".js-btn");
const overPlay = document.querySelector(".js-overplay");
const btnClose = document.querySelector(".js-close");
const btnOutside = document.getElementById("videoPlayer");

function enableAutoplay() { 
  btnOutside.autoplay = true;
  btnOutside.load();
}

function disableAutoplay() { 
  btnOutside.autoplay = false;
  btnOutside.load();
}

function showPopup() {
  overPlay.classList.add("open");
  enableAutoplay();
}

function hidePopup() {
  overPlay.classList.remove("open");
  disableAutoplay();
}

btnOpen.addEventListener("click", showPopup);
btnClose.addEventListener("click", hidePopup);
overPlay.addEventListener("click", hidePopup);


