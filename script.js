"use strict";

/*Nav bar*/

const header = document.querySelector(".header");

/*Fix it*/

// let prevScrollPos = window.pageYOffset;

// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollPos > currentScrollPos) {
//     header.classList.remove("scroll");
//   } else {
//     header.classList.add("scroll");
//   }
//   prevScrollPos = currentScrollPos;
// };

/*Numbers*/

/*Fix it*/

/*Mobile nav*/

const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const html = document.querySelector("html");
  const navItem = document.querySelectorAll(".nav__item");

  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    burger.classList.toggle("center");
    nav.classList.toggle("nav__active");
    html.classList.toggle("overflow");
  });
  navItem.forEach((e) => {
    e.addEventListener("click", () => {
      nav.classList.toggle("nav__active");
      html.classList.remove("overflow");
      burger.classList.toggle("toggle");
    });
  });
};

navSlide();

const hero = document.querySelector(`.hero`);

const navLock = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add(`header__shadow`);
  } else {
    header.classList.remove(`header__shadow`);
  }
};

const heroObserver = new IntersectionObserver(navLock, {
  root: null,
  threshold: 0.8,
});

heroObserver.observe(hero);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const customers = document.querySelector(`.customers`);
let valueDispalys = document.querySelectorAll(".num");
let interval = 5000;

const startsCounting = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
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
  }
};

const customersObserver = new IntersectionObserver(startsCounting, {
  root: null,
  threshold: 0.2,
});

customersObserver.observe(customers);
