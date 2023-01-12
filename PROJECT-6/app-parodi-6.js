const boxes = document.querySelectorAll(".box");
const image = document.querySelectorAll(" img");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const highest = (window.innerHeight / 6) * 4;
  boxes.forEach((box) => {
    const mostTop = box.getBoundingClientRect().top;
    if (mostTop < highest) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
    imageBox();
  });
}

function imageBox() {
  image.forEach((img, index) => {
    img.src = `img/${index + 1}.jpg`;
  });
}
