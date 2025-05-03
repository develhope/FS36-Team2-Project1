const steps = document.querySelectorAll(".sales-steps li");
const leftImg = document.querySelector(".img-left");
const rightImg = document.querySelector(".img-right");

const footerImages = {
  1: [
    "../foto/foto_video/inizia_a_vendere_in_un_battibaleno/p1_first.jpg",
    "../foto/foto_video/inizia_a_vendere_in_un_battibaleno/p1_second.jpg",
  ],
  2: [
    "../foto/foto_video/inizia_a_vendere_in_un_battibaleno/p2_first.jpg",
    "../foto/foto_video/inizia_a_vendere_in_un_battibaleno/p2_second.jpg",
  ],
  3: [
    "../foto/foto_video/inizia_a_vendere_in_un_battibaleno/p3_first.jpg",
    "../foto/foto_video/inizia_a_vendere_in_un_battibaleno/p3_second.jpg",
  ],
};

const originalImages = [
  "../foto_video/inizia_a_vendere_in_un_battibaleno/original_left.jpg",
  "../foto_video/inizia_a_vendere_in_un_battibaleno/original_right.jpg",
];

// steps.forEach((step) => {
//   step.addEventListener("mouseenter", () => {
//     const stepNum = step.dataset.step;
//     leftImg.src = images[stepNum][0];
//     rightImg.src = images[stepNum][1];
//   });
// });

function mouseOver(step) {
  step.addEventListener("mouseenter", () => {
    const stepKey = step.dataset.step;
    const stepImages = images[stepKey];

    if (stepImages) {
      leftImg.src = stepImages[0];
      rightImg.src = stepImages[1];
    } else {
      console.warn("Nessuna immagine trovata per step:", stepKey);
    }
  });

  step.addEventListener("mouseleave", () => {
    leftImg.src = originalImages[0];
    rightImg.src = originalImages[1];
  });
}
steps.forEach((step) => {
  mouseOver(step);
});
