var body = document.getElementsByTagName("body");
var rangeBlur = document.getElementById("blur");
var rangeMargin = document.getElementById("margin");


rangeBlur.addEventListener("oninput", (e) => {
  console.log(e);
});

function updateBlur(newVal) {
  document.documentElement.style.setProperty("--blur", `${newVal}px`);
}

function updateMargin(newVal) {
  document.documentElement.style.setProperty("--margin", `${newVal*5}px`);
}

function updateColor(newVal) {
    document.documentElement.style.setProperty("--color", `${newVal}`);

    
  }
