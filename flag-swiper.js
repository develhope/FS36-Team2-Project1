const slider = document.getElementById("flagSlider");
let flags = Array.from(document.querySelectorAll(".img-background"));
let activeIndex = 2; // centrale

function setActive() {
  flags.forEach((flag, i) =>
    flag.classList.toggle("active", i === activeIndex)
  );
}

function scrollNext() {
  // Sposta il primo elemento in fondo
  const first = slider.children[0];
  slider.appendChild(first);

  // Ricalcola le bandiere
  flags = Array.from(document.querySelectorAll(".img-background"));

  // Attiva nuova centrale
  setActive();
}

// Imposta iniziale
setActive();

setInterval(() => {
  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = "translateY(-60px)"; // altezza bandiera + margin

  setTimeout(() => {
    slider.style.transition = "none";
    slider.style.transform = "translateY(0)";
    scrollNext();
  }, 500);
}, 3000);
