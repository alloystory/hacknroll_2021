function getActivate(prob) {
  let result = Math.random();
  return result < prob;
}

function changeFont() {
  document.body
    .querySelectorAll("*")
    .forEach(
      (elem) => (elem.style.fontFamily = "Comic Sans MS, Comic Sans, cursive")
    );
}

function changeBg() {
  fetch("https://meme-api.herokuapp.com/gimme")
    .then((res) => res.json())
    .then((data) => {
      if (!data.nsfw) {
        let memeUrl = data.url;
        document.body.style.background = `url(${memeUrl})`;
      }
    })
    .catch((e) => console.error(e));
}

function addCss(cssClass, prob) {
  document.body.querySelectorAll("*").forEach((element) => {
    if (getActivate(prob)) element.classList.add(cssClass);
  });
}

chrome.storage.sync.get(["bg-status"], (data) => {
  let status = JSON.parse(data["bg-status"]);
  if (status) {
    changeFont();
    changeBg();
    addCss("annoy-rainbow-text", 0.2);
    addCss("annoy-jump-elem", 0.005);
    addCss("annoy-rotate-elem", 0.005);
    addCss("annoy-flatten-elem-x", 0.005);
    addCss("annoy-flatten-elem-y", 0.005);
  }
});
