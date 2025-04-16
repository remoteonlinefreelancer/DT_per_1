let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const bulletContainer = document.querySelector('.bullet-container');
let autoSlideInterval; // Holds the auto-slide interval ID

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });

    document.querySelectorAll('.bullet').forEach((bullet, index) => {
        bullet.classList.remove('active');
        if (index === currentIndex) {
            bullet.classList.add('active');
        }
    });

    const slideWidth = slides[0].offsetWidth;
    const containerWidth = document.querySelector('.slideshow-container').offsetWidth;
    const centerOffset = (containerWidth / 2) - (slideWidth / 2);

    const translateX = -currentIndex * (slideWidth + 20) + centerOffset;
    document.querySelector('.slides').style.transform = `translateX(${translateX}px)`;
}

function createBullets() {
    slides.forEach((_, index) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.addEventListener('click', () => {
            currentIndex = index;
            updateSlides();
            // resetAutoSlide(); 
            // Reset auto-slide on bullet click
        });
        bulletContainer.appendChild(bullet);
    });
}

function addImageClickEvents() {
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentIndex = index;
            updateSlides();
            // resetAutoSlide(); 
            // Reset auto-slide on image click
        });
    });
}

// Function to reset the auto-slide interval (stop auto slide)
// function resetAutoSlide() {
//     clearInterval(autoSlideInterval); 
//     setTimeout(() => {
//         autoSlideInterval = setInterval(() => {
//             currentIndex = (currentIndex + 1) % slides.length;
//             updateSlides();
//         }, 20000); 
//     }, 120000); 
// }

// Start auto-slide initially
autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}, 60000);

createBullets();
addImageClickEvents();
updateSlides();


