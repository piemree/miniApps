const stickSecond = document.getElementById("sec");
const stickMinute = document.getElementById("min");
const stickHour = document.getElementById("hour");
let a = 0;
setInterval(() => {
  let current = new Date();
  let second = current.getSeconds();
  let minute = current.getMinutes();
  let hour = current.getHours();

  if (second == 0) {
    stickSecond.style.transition = "none";
  } else {
    stickSecond.style.transition = "all .05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }

  if (minute == 0) {
    stickMinute.style.transition = "none";
  } else {
    stickMinute.style.transition = "all .05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }
  if (hour == 0) {
    stickHour.style.transition = "none";
  } else {
    stickHour.style.transition = "all .05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }
  stickSecond.style.transform = `rotate(${second * 6 + 90}deg)`;

  stickMinute.style.transform = `rotate(${minute * 6 + 90}deg)`;

  stickHour.style.transform = `rotate(${hour * 30 + 90}deg)`;
}, 100);
