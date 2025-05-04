const steps = document.querySelectorAll(".sales-steps li");
const leftImg = document.querySelector(".img-left");
const rightImg = document.querySelector(".img-right");

const footerImages = {
  1: [
    "./foto_video/inizia_a_vendere_in_un_battibaleno/p1_first.jpg",
    "./foto_video/inizia_a_vendere_in_un_battibaleno/p1_second.jpg",
  ],
  2: [
    "./foto_video/inizia_a_vendere_in_un_battibaleno/p2_first.jpg",
    "./foto_video/inizia_a_vendere_in_un_battibaleno/p2_second.jpg",
  ],
  3: [
    "./foto_video/inizia_a_vendere_in_un_battibaleno/p3_first.jpg",
    "./foto_video/inizia_a_vendere_in_un_battibaleno/p3_second.jpg",
  ],
};

const originalImages = [
  "./foto_video/inizia_a_vendere_in_un_battibaleno/original_first.jpg",
  "./foto_video/inizia_a_vendere_in_un_battibaleno/original_second.jpg",
];

if (!leftImg || !rightImg) {
  console.error("Errore: Impossibile trovare .img-left o .img-right nel DOM.");
} else {
  leftImg.src = originalImages[0];
  rightImg.src = originalImages[1];
}

if (steps.length === 0) {
  console.warn(
    "Attenzione: Nessun elemento trovato per '.sales-steps li'. Controlla il selettore CSS e l'HTML."
  );
}

function setupStepHover(step) {
  const stepKey = step.dataset.step;
  if (!stepKey) {
    console.warn("Elemento <li> trovato senza attributo 'data-step':", step);
    return;
  }

  step.addEventListener("mouseenter", () => {
    const stepImages = footerImages[stepKey];

    if (stepImages && stepImages.length === 2) {
      if (leftImg) leftImg.src = stepImages[0];
      if (rightImg) rightImg.src = stepImages[1];
    } else {
      console.warn(
        `Immagini non trovate o array incompleto per lo step: ${stepKey}. Controlla l'oggetto 'footerImages' e l'attributo 'data-step' nell'HTML.`
      );
    }
  });

  step.addEventListener("mouseleave", () => {
    if (leftImg) leftImg.src = originalImages[0];
    if (rightImg) rightImg.src = originalImages[1];
  });
}

steps.forEach((step) => {
  setupStepHover(step);
});
