const sound = document.getElementsByTagName("audio");

const a = document.getElementById("a");
const s = document.getElementById("s");
const d = document.getElementById("d");
const f = document.getElementById("f");
const g = document.getElementById("g");
const h = document.getElementById("h");
const j = document.getElementById("j");
const k = document.getElementById("k");
const l = document.getElementById("l");

var clap = new Audio("sounds/clap.wav");
var hihat = new Audio("sounds/hihat.wav");
var kick = new Audio("sounds/kick.wav");
var openhat = new Audio("sounds/openhat.wav");
var boom = new Audio("sounds/boom.wav");
var ride = new Audio("sounds/ride.wav");
var snare = new Audio("sounds/snare.wav");
var tom = new Audio("sounds/tom.wav");
var tink = new Audio("sounds/tink.wav");

document.addEventListener("keypress", (e) => {
  if (e.code == "KeyA") {
    a.style = "border:5px solid yellow";
    clap.currentTime=0;
    clap.play();
    setInterval(() => {
      a.style = "border:5px solid black";
    }, 200);
  }
  if (e.code == "KeyS") {
    s.style = "border:5px solid yellow";
    hihat.currentTime=0;
    hihat.play();
    setInterval(() => {
      s.style = "border:5px solid black";
    }, 200);
  }
  if (e.code == "KeyD") {
    d.style = "border:5px solid yellow";
    kick.currentTime=0;
    kick.play();
    setInterval(() => {
      d.style = "border:5px solid black";
    }, 200);
  }
  if (e.code == "KeyF") {
    f.style = "border:5px solid yellow";
    openhat.currentTime=0;
    openhat.play();
    setInterval(() => {
      f.style = "border:5px solid black";
    }, 200);
  }
  if (e.code == "KeyG") {
    g.style = "border:5px solid yellow";
    boom.currentTime=0;
    boom.play();
    setInterval(() => {
      g.style = "border:5px solid black";
    }, 200);
  }
  if (e.code == "KeyH") {
    h.style = "border:5px solid yellow";
    ride.currentTime=0;
    ride.play();
    setInterval(() => {
      h.style = "border:5px solid black";
    }, 200);
  }
  if (e.code == "KeyJ") {
    j.style = "border:5px solid yellow";
    snare.currentTime=0;
    snare.play();
    setInterval(() => {
      j.style = "border:5px solid black";
    }, 200);
  }
  if (e.code == "KeyK") {
    k.style = "border:5px solid yellow";
    tom.currentTime=0;
    tom.play();
    setInterval(() => {
      k.style = "border:5px solid black";
    }, 200);
  }
  if (e.code == "KeyL") {
    l.style = "border:5px solid yellow";
    tink.currentTime=0;
    tink.play();
    setInterval(() => {
      l.style = "border:5px solid black";
    }, 100);
  }
});
