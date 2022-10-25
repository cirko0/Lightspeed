"use strict";

/*Nav bar*/

const header = document.querySelector(".header");
const hero = document.querySelector(`.hero`);
const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const html = document.querySelector("html");
const navItem = document.querySelectorAll(".nav__item");
const customers = document.querySelector(`.customers`);
let valueDispalys = document.querySelectorAll(".num");
let interval = 5000;
let br = 0;
const text1 = document.querySelectorAll(`.fade--left`);
const text2 = document.getElementById(`text2`);
const comments = document.querySelector(`.comment__grid`);
const company = document.querySelector(`.company__content`);

/*Mobile nav*/

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const navSlide = () => {
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

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Hero intersectionObserver

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
  threshold: 1,
});

heroObserver.observe(hero);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Customers intersectionObserver

const startsCounting = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting && br === 0) {
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
      br = 1;
    });
  }
};

const customersObserver = new IntersectionObserver(startsCounting, {
  root: null,
  threshold: 0.2,
});

customersObserver.observe(customers);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* Section bestsellers observer */

text1.forEach((container) => {
  const textFadeLeft = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      container.classList.remove(`fade--left`);
    }
  };
  const bestsellersObserverLeft = new IntersectionObserver(textFadeLeft, {
    root: null,
    threshold: 0.4,
  });

  bestsellersObserverLeft.observe(container);
});

const textFadeRight = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    text2.classList.remove(`fade--right`);
  }
};

const bestsellersObserverRight = new IntersectionObserver(textFadeRight, {
  root: null,
  threshold: 0.4,
});

bestsellersObserverRight.observe(text2);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* Section comments observer */

const textFadeUp = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    comments.classList.remove(`fade--up`);
  }
};

const bestsellersObserverUp = new IntersectionObserver(textFadeUp, {
  root: null,
  threshold: 0.1,
});

bestsellersObserverUp.observe(comments);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* Section company observer */

const textFade = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    company.classList.remove(`fade`);
  }
};

const bestsellersObserver = new IntersectionObserver(textFade, {
  root: null,
  threshold: 0.3,
});

bestsellersObserver.observe(company);

// REtarded mail

const email = document.getElementById(`email`);
const label = document.getElementById(`email-label`);

email.addEventListener(`change`, function () {
  if (this.value !== ``) {
    label.classList.add(`empty__input`);
  } else {
    label.classList.remove(`empty__input`);
  }
});
