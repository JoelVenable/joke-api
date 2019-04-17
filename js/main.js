
makeButtons();


function showPunchline() {
  const punchline = document.querySelector("#punchline");
  punchline.style.opacity = "1";
}

function hidePunchline() {
  const punchline = document.querySelector("#punchline");
  punchline.style.opacity = "0";
}

function getJoke() {
  hidePunchline();
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(joke => joke.json())
    .then(parsedJoke => placeJoke(parsedJoke))
}







function placeJoke(joke) {
  const setupDiv = document.querySelector('#setup'),
    punchDiv = document.querySelector('#punchline');

  setupDiv.innerHTML = `<h4>${joke.setup}</h4>`;
  punchDiv.innerHTML = `<h4>${joke.punchline}</h4>`;
}



function makeButtons() {
  const fetchButton = document.querySelector('#newJoke'),
    punchButton = document.querySelector('#showPunchline')

  fetchButton.addEventListener("click", getJoke);
  punchButton.addEventListener("click", showPunchline)
}
