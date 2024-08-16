const clockElem = document.querySelector(".clock");
const hourElem = document.querySelector(".hour");
const minElem = document.querySelector(".min");
const secElem = document.querySelector(".sec");
let deg = 6;

setInterval(clockHandler, 1000);
function clockHandler() {
  let timeNow = new Date();
  let h = timeNow.getHours() * 30;
  let m = timeNow.getMinutes() * deg;
  let s = timeNow.getSeconds() * deg;

  secElem.style.transform = `rotateZ(${s}deg)`;
  minElem.style.transform = `rotateZ(${m}deg)`;
  hourElem.style.transform = `rotateZ(${h + m / 12}deg)`;
}
