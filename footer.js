const steps = document.querySelectorAll(".sales-steps li");
const leftImg = document.querySelector(".img-left");
const rightImg = document.querySelector(".img-right");

const images = {
  1: ["img/step1a.jpg", "img/step1b.jpg"],
  2: ["img/step2a.jpg", "img/step2b.jpg"],
  3: ["img/step3a.jpg", "img/step3b.jpg"],
};

steps.forEach((step) => {
  step.addEventListener("mouseenter", () => {
    const stepNum = step.dataset.step;
    leftImg.src = images[stepNum][0];
    rightImg.src = images[stepNum][1];
  });
});
