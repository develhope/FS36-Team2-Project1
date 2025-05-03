//prende dalla classe
let frasi = document.getElementsByClassName("voci");

for (let i = 0; i < frasi.length; i++) {
  frasi[i].addEventListener("click", (event) => {
    let testoBianco = document.querySelector(".bianco");
    if (testoBianco) {
      toggleTextColor(testoBianco, "bianco", "voci");
      toggleTextColor(event.target, "voci", "bianco");
    } else {
      toggleTextColor(event.target, "voci", "bianco");
    }
  });
}

function toggleTextColor(element, removeClass, addClass) {
  element.classList.remove(removeClass);
  element.classList.add(addClass);
}

const carousel = document.querySelector(".section-first-carousel");

if (carousel) {
  const firstCard = carousel.querySelector(".section-first-card");
  const firstCardWidth = firstCard
    ? firstCard.offsetWidth + parseFloat(getComputedStyle(carousel).gap || "0")
    : 0;
  const carouselLi = [..carousel.children];

  let isDragging = false,
    isAutoPlaying = true,
    startX,
    startScrollLeft,
    timeoutId;

  let cardPerView =
    firstCardWidth > 0 ? Math.round(carousel.offsetWidth / firstCardWidth) : 3;

  if (carouselLi.length > 0 && cardPerView > 0) {
    carouselLi
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    carouselLi.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("section-first-no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("section-first-no-transition");
  }

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("section-first-drag");
    startX = e.pageX || e.targetTouches[0].pageX;
    startScrollLeft = carousel.scrollLeft;
    clearTimeout(timeoutId);
    isAutoPlaying = false;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX || e.targetTouches[0].pageX;
    const walk = currentX - startX;
    carousel.scrollLeft = startScrollLeft - walk;
    e.preventDefault();
  };

  const dragStop = () => {
    if (!isDragging) return;
    isDragging = false;
    carousel.classList.remove("section-first-drag");
  };

  const autoPlay = () => {
    if (!isAutoPlaying || window.innerWidth < 800) return;
    timeoutId = setTimeout(() => {
      carousel.scrollLeft += firstCardWidth;
      autoPlay();
    }, 7000);
  };

  const infiniteScroll = () => {
    if (carousel.scrollLeft <= 0) {
      carousel.classList.add("section-first-no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("section-first-no-transition");
    } else if (
      Math.ceil(carousel.scrollLeft) >=
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.classList.add("section-first-no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("section-first-no-transition");
    }

    clearTimeout(timeoutId);
    if (!isDragging) {
      // autoPlay(); // Uncomment if you want manual scroll to restart autoplay
    }
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart, { passive: true });

  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging, { passive: false });

  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("touchend", dragStop);

  carousel.addEventListener("scroll", infiniteScroll);

  autoPlay();

  carousel.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  carousel.addEventListener("mouseleave", () => {
    if (!isDragging) {
    }
  });
} else {
  console.warn("Carousel element '.section-first-carousel' not found.");
}
