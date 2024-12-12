"use strict";
const firstBox = document.querySelector(".first_box");
const secondBox = document.querySelector(".second_box");
const thirdBox = document.querySelector(".third_box");
const fourthBox = document.querySelector(".fourth_box");
const box = document.querySelector(".box");

const obsCallBack = function (entries) {
  const [entry] = entries;
  console.log(entry);
  // if (!entry.isIntersecting) return;
  // entry.target.classList.add("styled_second_box");
  // observer.unobserve(entry.target);
};

const obsOptions = {
  root: null,
  threshold: 1.0,
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(secondBox);
