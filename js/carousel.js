let slideIndex = 0;

function moveSlideHorizontal(n) {
  const slides = document.getElementsByClassName("carousel-images")[0];
  const images = document.querySelectorAll(".carousel-images img");
  const slideWidth = images[0].clientWidth;

  slideIndex += n;
  if (slideIndex > images.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = images.length - 1;

  slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}