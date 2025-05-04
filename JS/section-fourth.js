let spotlight = document.getElementById("quarta-section-spotlight");

document.addEventListener("mousemove", function (e) {
  let x = e.pageX;
  let y = e.pageY;

  spotlight.style.background =
    "radial-gradient(circle at " +
    x +
    "px " +
    y +
    "px ,rgba(255, 255, 255, 1), transparent 50%)";
});
