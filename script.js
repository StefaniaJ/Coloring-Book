"use strict";
let buttons = document.querySelectorAll("button");
var colr = "white";

window.addEventListener("DOMContentLoaded", loadSVG);

//Fetch the character
async function loadSVG() {
  let svgData = await fetch("sp.svg");
  let svgFile = await svgData.text();
  document.querySelector("#theSVG").innerHTML = svgFile;
  //call the event listener for character
  registerEvent();
  loadBtns();
}

//Fetch the buttons
async function loadBtns() {
  let btnsData = await fetch("colors.svg");
  let btnsFile = await btnsData.text();
  document.querySelector("#theColors").innerHTML = btnsFile;
  //call the event listener for buttons
  registerColors();
}

//add an event listener for every shapes of character
function registerEvent() {
  document.querySelector("#Shapes").addEventListener("click", clickShapes);
  // document
  //   .querySelector("#colors-palette")
  //   .addEventListener("click", clickColors);
}

function registerColors() {
  document.querySelector("#Shapes").addEventListener("click", clickShapes);
  document.querySelector("#Colors").addEventListener("click", clickColors);
}

//When you click a shape, add color white
function clickShapes(event) {
  const target = event.target;
  console.log("clicked: ");
  console.log(target);
  console.log("Color:" + target.style.fill);
  target.style.fill = colr;
}

function clickColors(event) {
  // buttons.forEach(setClr);
  // function setClr(btn) {
  //   btn.addEventListener("click", function() {
  //     colr = this.id;
  //     if (btn.id == "reset") {
  //       location.reload();
  //     }
  //   });
  //   btn.style.backgroundColor = btn.id;
  //}
  const target = event.target;
  console.log("color: ");
  console.log(target);
}
