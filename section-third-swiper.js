document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    centeredSlides: true,
    speed: 600,
    allowTouchMove: false,
    slidesPerView: "auto",
    initialSlide: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadow: true,
    },
  });
});
