const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages.children.length) % carouselImages.children.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages.children.length;
    updateCarousel();
});

function updateCarousel() {
    const width = carouselImages.clientWidth / carouselImages.children.length;
    carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
}