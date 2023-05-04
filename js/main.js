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

// create the main ul elements
let paginationElement = document.createElement('ul');

// set ID on the created element
paginationElement.id = 'pagination-ul';

// create list items based on slides count
for (let i = 1; i <= slidesCount; i++) {
    let li = document.createElement('li');

    // set custom attribute
    li.setAttribute('data-index', i);

    // set item content
    li.appendChild(document.createTextNode(i));

    // append item to ul
    paginationElement.appendChild(li);
}

// append ul to the page
document.getElementById('paginations').appendChild(paginationElement);

// get the new created ul
let paginationUl = document.getElementById('pagination-ul');

// get the pagination items
let paginationItems = Array.from(paginationUl.children);

// loop through all pagination items
paginationItems.forEach(page => {
    page.onclick = () => {
        currentSlide = parseInt(page.getAttribute('data-index'));
        theChekcer();
    }
})

// trigger the checker function
theChekcer();

// next slide function
function nextSlide() {
    if (!nextButton.classList.contains('disabled')) {
        currentSlide++;
        theChekcer();
    }

}

// previous slide function
function prevSlide() {
    if (!prevButton.classList.contains('disabled')) {
        currentSlide--;
        theChekcer();
    }
}

// create the checker function
function theChekcer() {
    // set the slide number
    slideNumber.textContent = `Slide #${currentSlide} of ${slidesCount}`;

    // remove all active classes
    removeAllActive();

    // set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active');

    //set active class on current pagination item
    paginationUl.children[currentSlide - 1].classList.add('active');

    // check if the current slide is the first one
    if (currentSlide === 1) {
        // Add disabledclass on previous button
        prevButton.classList.add('disabled');
    } else {
        // Remove disabled class on previous button
        prevButton.classList.remove('disabled');
    }

    // check if the current slide is the last one
    if (currentSlide === slidesCount) {
        nextButton.classList.add('disabled');
    } else {
        // Remove disabled class on next button
        nextButton.classList.remove('disabled');
    }
}

// remove all active classes from paginations and images
function removeAllActive() {
    // loop through images
    sliderImages.forEach(img => {
        img.classList.remove('active');
    });

    // loop through pagination bullets
    paginationItems.forEach(li => {
        li.classList.remove('active');
    })
}