import { products } from "./api";

//hero image auto slide
const track = document.querySelector('.hero-image-container');
const heroSlide = document.querySelectorAll('.hero-image');
const totalSlides = heroSlide.length;
let index = 0;

setInterval(() => {
    index = (index + 1) % totalSlides;
    track.style.transform = `translateX(-${index * 104}%)`;
}, 6000);

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