/* Slideshow Javascript */
var slideIndex = 1;
showSlides(slideIndex); // Show the first picture of the slideshow

// Next/previous controls
function plusSlides(slide) {
  showSlides(slideIndex += slide); // Either increment by 1 (Next) or decrease by 1 (Previous).
}

// Thumbnail image controls
function currentSlide(slide) {
  showSlides(slideIndex = slide); 
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides"); // An array of all of the element with class="slides"
  var circles = document.getElementsByClassName("circle"); // An array of all the element with class="circle"
  if (n > slides.length) {
       slideIndex = 1  // If the slide at n index is more than the amount of pictures, it will set it back to the first picture
  }   
  if (n < 1) {
      slideIndex = slides.length // if the slide at n index is lesser than 1 (which is the slide before the the first picture), it will show the last picture slideshow
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  // Make all of the pictures display none;
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" currentSlide", ""); // Make all of the circles no css style
  }
  slides[slideIndex-1].style.display = "block";  
  circles[slideIndex-1].className += " currentSlide"; // CSS style the current slide as black
}