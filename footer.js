const steps = document.querySelectorAll(".sales-steps li");
const leftImg = document.querySelector(".img-left");
const rightImg = document.querySelector(".img-right");

const images = {
  1: [
    "foto_video/sales/36138f611ff7a9bb25d679290f623a99.jpg",
    "foto_video/sales/669022e522248e4ab88aeeb1165486d0.jpg",
  ],
  2: [
    "foto_video/sales/890dbeb471a10637528a72179b12bfa9.jpg",
    "foto_video/sales/742068a6e1f7a94ba0ee51e40bea7226.jpg",
  ],
  3: [
    "foto_video/sales/bcb8bcb289a7335a482b0769b77ab421.jpg",
    "foto_video/sales/ce0048c94b712ae773a1f6371ced6303.jpg",
  ],
};

steps.forEach((step) => {
  step.addEventListener("mouseenter", () => {
    const stepNum = step.dataset.step;
    leftImg.src = images[stepNum][0];
    rightImg.src = images[stepNum][1];
  });
});
