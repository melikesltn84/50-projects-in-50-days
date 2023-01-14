const label = document.querySelectorAll(".form-control label");

label.forEach((word) => {
  console.log(word);
  let splitList = word.innerText.split("");
  let toDoList = [];

  for (let i of splitList) {
    toDoList.push(i);
  }

  for (let i = 0; i < toDoList.length; i++) {
    let spliceList = splitList.splice(i, 1);
    word.innerText = `${spliceList}`;
  }

  for (let i = 0; i < toDoList.length; i++) {
    let spanTag = `<span style="transition-delay:${(i + 1) * 50}ms">${
      toDoList[i]
    }</span>`;
    word.insertAdjacentHTML("beforeend", spanTag);
  }
});
