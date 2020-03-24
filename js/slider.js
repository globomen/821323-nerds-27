let dots = document.querySelectorAll('.slider__control-button');
let dotsArea = document.querySelector('.slider__controls');
let slides = document.querySelectorAll('.slider__item');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
  if (n < 1) {
    slideIndex = slides.length;
  } else if (n > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('slider__control-button--active');
  }
  slides[slideIndex - 1].classList.add('active');
  dots[slideIndex - 1].classList.add('slider__control-button--active');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n)
}

dotsArea.onclick = function (e) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (e.target.classList.contains('slider__control-button') && e.target == dots[i - 1]) {
      currentSlide(i);
    }
  }
}
