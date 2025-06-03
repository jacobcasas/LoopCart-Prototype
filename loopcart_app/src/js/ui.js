import { products, shoppingLists } from "./api.js";

// =====================
// Hero Image Auto Slide
// =====================

const track = document.querySelector('.hero-image-container');
const heroSlides = document.querySelectorAll('.hero-image');
const totalSlides = heroSlides.length;
const slideWidth = heroSlides[0]?.offsetWidth || 0;

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
};

const stopSlider = () => {
  clearInterval(slideInterval);
};

const moveToSlide = (i) => {
  currentTranslate = -i * slideWidth;
  prevTranslate = currentTranslate;
  track.style.transition = 'transform 0.3s ease';
  track.style.transform = `translateX(${currentTranslate}px)`;
};

const snapToNearestSlide = () => {
  index = Math.round(-currentTranslate / slideWidth);
  index = Math.max(0, Math.min(index, totalSlides - 1));
  moveToSlide(index);
};

if (track && totalSlides > 0) {
  track.addEventListener('mouseenter', stopSlider);
  track.addEventListener('mouseleave', startSlider);

  track.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    startX = e.pageX;
    stopSlider();
    track.style.transition = 'none';
  });

  window.addEventListener('mousemove', (e) => {
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

  startSlider();
}

// =====================
// Card Navigation
// =====================

const navigateToPage = (id, page) => {
  if (id) window.location.href = `${page}.html?id=${id}`;
};

document.querySelectorAll('.item-card-sm').forEach(card => {
  card.addEventListener('click', () => {
    navigateToPage(card.dataset.id, 'product');
  });
});

document.querySelectorAll('.shopping-list-card').forEach(card => {
  card.addEventListener('click', () => {
    navigateToPage(card.dataset.id, 'shopping-list');
  });
});

document.querySelectorAll('.notification-card-img').forEach(card => {
  card.addEventListener('click', () => {
    navigateToPage(card.dataset.id, 'product');
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.querySelector(".back-button");

  if (backButton) {
    backButton.addEventListener("click", () => {
      window.history.back();
    });
  }
});
