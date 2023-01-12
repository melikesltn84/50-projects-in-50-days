const container = document.querySelector(".container");
const loading = document.querySelector(".load");

let load = 0;
let stop = setInterval(bluring, 50);

function bluring() {
  load++;
  if (load > 99) {
    clearInterval(stop);
  }
  loading.innerText = `${load}%`;
  container.style.opacity = scale(load, 0, 100, 0.2, 1);
  container.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`;
  if (loading.innerText == `100%`) {
    loading.classList.add("opacity");
  }
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
