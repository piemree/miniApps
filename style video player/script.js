const video = document.querySelector(".player video");
const playButton = document.querySelector("button[title='Toggle Play']");
const skip = document.querySelector("button[data-skip='25']");
const back = document.querySelector("button[data-skip='-10']");
const progress = document.querySelector(".progress__filled");
const progressAll = document.querySelector(".progress");
const volume = document.querySelector(".player__slider[name='volume']");
const playBack = document.querySelector(".player__slider[name='playbackRate']");

let isClicked = false;

progressAll.addEventListener("mousedown", (e) => {
  isClicked = true;
  progressAll.addEventListener("mousemove", (e) => {
    if (isClicked) {
      let drag = (progressAll.offsetWidth - 7.6) / video.duration;
      let current = e.layerX / drag;
   
      video.currentTime = (video.duration * current) / 100;
    }
  });
});
progressAll.addEventListener("mouseleave", (e) => {
  isClicked = false;
});
progressAll.addEventListener("mouseup", (e) => {
  isClicked = false;
});
progressAll.addEventListener("click", (e) => {
  let drag = (progressAll.offsetWidth - 7.6) / video.duration;
  let current = e.layerX / drag;
  video.currentTime = (video.duration * current) / 100;
  video.currentTime = current;
});
playBack.addEventListener("mousedown", (e) => {
  playBack.addEventListener("mousemove", (e) => {
    video.playbackRate = playBack.value;
  });
});

volume.addEventListener("mousedown", (e) => {
  volume.addEventListener("mousemove", (e) => {
    video.volume = volume.value;
  });
});

video.addEventListener("timeupdate", (e) => {
  let bar = e.target.currentTime / e.target.duration;
  progress.style.flexBasis = `${bar * 100}%`;
});

skip.addEventListener("click", (e) => {
  video.currentTime += 25;
  
});

back.addEventListener("click", (e) => {
  video.currentTime -= 10;
  if (video.currentTime == 10) {
    playPause = false;
  }
 
});

let playPause = true;
video.addEventListener("click", (e) => {
  playPause = !playPause;
  if (playPause) {
    video.pause();
    playButton.innerText = "►";
  } else {
    video.play();
    playButton.innerText = "❚❚";
  }
});

playButton.addEventListener("click", (e) => {
  playPause = !playPause;
  if (playPause) {
    video.pause();
    playButton.innerText = "►";
  } else {
    video.play();
    playButton.innerText = "❚❚";
  }
});

/* video.addEventListener("timeupdate", (e) => {
    e.target.currentTime
  });
 */
