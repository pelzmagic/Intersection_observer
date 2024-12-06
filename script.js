"use strict";
const firstBox = document.querySelector(".first_box");
const secondBox = document.querySelector(".second_box");
const thirdBox = document.querySelector(".third_box");
const fourthBox = document.querySelector(".fourth_box");
const box = document.querySelector(".box");

// const obsCallBack = function (entries observer) {
//     const [entry] =
// };

const obsOptions = {
  root: null,
  threshold: 0.1,
};

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(firstBox);
