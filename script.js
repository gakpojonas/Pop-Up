"use strict";

const text = document.querySelector(".text");
const openText = document.querySelector(".open");
const closeText = document.querySelector(".close");
const onTextClose = document.querySelector(".on-text-close");

closeText.addEventListener("click", function () {
  text.style.visibility = "hidden";
  closeText.style.display = "none";
  openText.style.display = "block";
  onTextClose.style.display = "block";
});

openText.addEventListener("click", function () {
  text.style.visibility = "visible";
  closeText.style.display = "block";
  openText.style.display = "none";
  onTextClose.style.display = "none";
});
