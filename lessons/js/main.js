let currentSlide = 0;
const slideTimeout = 15; // seconds

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.contentSection');
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('activeSlide');
        } else {
            slide.classList.remove('activeSlide');
        }
    });

    document.body.className = `slide-${slideIndex} loaded`;
    currentSlide = slideIndex;
}

function checkVideoTime(video) {
    if (video.currentTime >= slideTimeout) {
        markAsViewed(0);
    }
}

function markAsViewed(slideIndex) {
    const btn = document.getElementById(`btn-${slideIndex === 0 ? 'video' : 'task'}`);
    btn.classList.add('viewed');
}

function nextSlide() {
    if (currentSlide < document.querySelectorAll('.contentSection').length - 1) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

// Assuming tasks completion function
function markTaskAsCompleted() {
    markAsViewed(1);
}

// Initialize the first slide
showSlide(0);
