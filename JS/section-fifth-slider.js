const images = document.querySelectorAll(".section-fifth-slider-img");

//quando il mouse si trova sopra le immagini, ottengono/perdono active
images.forEach((img) => {
  img.addEventListener("mouseover", () => {
    images.forEach((i) => i.classList.remove("section-fifth-slider-active"));
    img.classList.add("section-fifth-slider-active");
  });
});

//quando il mouse non si trova sul div, tutte le immagini perdono active
const gallery = document.querySelector(".section-fifth-slider-card");
gallery.addEventListener("mouseleave", () => {
  images.forEach((i) => i.classList.remove("section-fifth-slider-active"));
});
