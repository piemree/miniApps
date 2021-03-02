const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  let bool = true;

  panel.addEventListener("click", (e) => {
    bool = !bool;
    if (bool) {
      panel.classList.remove("clicked");

      panel.firstElementChild.style.fontSize = "2em";
      panel.lastElementChild.style.fontSize = "2em";
      panel.firstElementChild.style.transform = "translateY(-100%)";
      panel.lastElementChild.style.transform = "translateY(100%)";
      panel.children[1].style.fontSize = "4em";
    } else {
      panel.classList.add("clicked");
      panel.firstElementChild.style.transform = "translateY(20%)";
      panel.lastElementChild.style.transform = "translateY(-20%)";
      panel.firstElementChild.style.fontSize = "4em";
      panel.lastElementChild.style.fontSize = "4em";
      panel.children[1].style.fontSize = "8em";
    }
  });
});
