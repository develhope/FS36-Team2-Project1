const carousel = document.querySelector(".section-fifth-carousel");
const firstCardWidth = carousel.querySelector(
  ".section-fifth-card"
).offsetWidth;
const carouselLi = [..carousel.children];

let isDragging = false,
  startX,
  startScrollLeft,
  timeoutId;
//quante card possono entrare nel carosello
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

//loop infinito
//inserisce una copia delle card all'inizio del carosello
carouselLi
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

//inserisce le card alla fine del carosello
carouselLi.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);

  //..
});
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("section-fifth-drag");
  //registra la posizione iniziale del cursore e scrolla il carosello.
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  //aggiorna la posizione del carosello in base al cursore.
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("section-fifth-drag");
};

const autoPlay = () =>
  (timeoutId = setInterval(
    () => (carousel.scrollLeft += firstCardWidth),
    7000
  ));
autoPlay();

const infiniteScroll = () => {
  if (carousel.scrollLeft == 0) {
    //quando raggiunge il limite sinistra crea una classe per simulare l'effetto infinito
    carousel.classList.add("section-fifth-no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("section-fifth-no-transition");
  } else if (
    //esatto opposto
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("section-fifth-no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("section-fifth-no-transition");
  }
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
