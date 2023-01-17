const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single";

let getJoke = () => {
  joke.classList.remove("show");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      joke.textContent = `${item.joke}`;
      joke.classList.add("show");
    });
};

jokeBtn.addEventListener("click", () => {
  getJoke();
});
