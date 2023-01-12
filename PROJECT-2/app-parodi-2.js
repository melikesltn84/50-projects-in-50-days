const next_btn = document.querySelector("#next");
const prev_btn = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector("#progress");
//BİRİNCİ TARZ
// console.log(circles);
// next_btn.addEventListener("click", () => {
//   circles.forEach((circle) => {
//     if (circle.id % 2 == 1) {
//       circle.style.display = "block";
//       circle.classList.add("img-active");
//     } else if (circle.id % 2 == 0) {
//       circle.style.display = "none";
//     }
//   });
//   next_btn.style.opacity = 0;
//   prev_btn.style.opacity = 1;
//   prev_btn.disabled = false;
//   next_btn.disabled = true;
// });

// prev_btn.addEventListener("click", () => {
//   circles.forEach((circle) => {
//     if (circle.id % 2 == 0) {
//       circle.style.display = "block";
//       circle.classList.add("active");
//     } else if (circle.id % 2 == 1) {
//       circle.style.display = "none";
//     }
//   });
//   progressBar.style.width = "100%";
//   progressBar.style.height = "20px";
//   prev_btn.style.opacity = 0;
//   next_btn.style.opacity = 1;
//   next_btn.disabled = false;
//   prev_btn.disabled = true;
// });

//İKİNCİ TARZ
let currentActive = 1;

next_btn.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev_btn.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progressBar.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev_btn.disabled = true;
  } else if (currentActive === circles.length) {
    next_btn.disabled = true;
  } else {
    prev_btn.disabled = false;
    next_btn.disabled = false;
  }
}
