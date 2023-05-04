// get slider items
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// get number of slides
let slidesCount = sliderImages.length;

// set current slide
let currentSlide = 1;

// slide number string element
let slideNumber = document.querySelector('.slide-number');

// previous and next buttons
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// handle click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// next slide function
function nextSlide() {
    console.log('next');
}

// previous slide function
function prevSlide() {
    console.log('previous');
}