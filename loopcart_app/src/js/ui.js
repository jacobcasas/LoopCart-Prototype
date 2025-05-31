import { products } from "./api";
import { shoppingLists } from "./api";

//hero image auto slide
const track = document.querySelector('.hero-image-container');
const heroSlide = document.querySelectorAll('.hero-image');
const totalSlides = heroSlide.length;
const slideWidth = heroSlide[0].offsetWidth;

let index = 0;
let slideInterval;
let isDragging = false;
let startX;
let currentTranslate = 0;
let prevTranslate = 0;

const startSlider = () => {
    slideInterval = setInterval(() => {
        index = (index + 1) % totalSlides;
        moveToSlide(index);
    }, 4000);
}

const stopSlider = () => {
    clearInterval(slideInterval);
}

const moveToSlide = (i) => {
    currentTranslate = -i * slideWidth;
    prevTranslate = currentTranslate;
    track.style.transition = 'transform 0.3s ease';
    track.style.transform = `translateX(${currentTranslate}px)`;
}

track.addEventListener('mouseenter', stopSlider);
track.addEventListener('mouseleave', startSlider);

//hero image draggable 

track.addEventListener('mousedown', e => {
    e.preventDefault();
    isDragging = true;
    startX = e.pageX;
    stopSlider();
    track.style.transition = 'none';
});

window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const deltaX = e.pageX - startX;
    currentTranslate = prevTranslate + deltaX;
    track.style.transform = `translateX(${currentTranslate}px)`;
});

window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    snapToNearestSlide();
    startSlider();
});

// pause slider on hover

const snapToNearestSlide = () => {
    index = Math.round(-currentTranslate / slideWidth);
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    moveToSlide(index);
}

startSlider();

document.querySelectorAll('.item-card-sm').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.id;
        window.location.href = `product.html?id=${id}`;
    });
});

document.querySelectorAll('.shopping-list-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.id;
        window.location.href = `shopping-list.html?id=${id}`;
    });
});

