const swiper = new Swiper(".swiper", {
  direction: "vertical",
  slidesPerView: 6, // mostra tutti gli elementi
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
});
