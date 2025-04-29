document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    speed: 600,
    allowTouchMove: false,
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 3,
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadow: true,
    },
    // slideActiveClass: "pippo",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  swiper.on("slideChange", function () {
    console.log(swiper);

    // const nextSlide = document.querySelector(
    //   `[data-swiper-slide-index="${swiper.activeIndex + 1}"]`
    // );
    // nextSlide.classList.add("hidden");
  });
});
