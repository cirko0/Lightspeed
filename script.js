"use strict";

/*Nav bar*/

const header = document.querySelector(".header");

/*Fix it*/

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.classList.remove("scroll");
  } else {
    header.classList.add("scroll");
  }
  prevScrollPos = currentScrollPos;
};

/*Numbers*/

/*Fix it*/

let valueDispalys = document.querySelectorAll(".num");

let interval = 5000;

valueDispalys.forEach((valueDispalys) => {
  let startValue = 0;
  let endValue = parseInt(valueDispalys.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 10;
    valueDispalys.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
