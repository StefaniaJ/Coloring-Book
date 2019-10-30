"use strict";

let colr = "white";

window.addEventListener("DOMContentLoaded", start);

function start() {
  loadSVG();
  loadBtns();
}

//Fetch the character
async function loadSVG() {
  let svgData = await fetch("sp.svg");
  let svgFile = await svgData.text();
  document.querySelector("#theSVG").innerHTML = svgFile;
  //call the event listener for character and colors
  registerEvent();
}

//Fetch the colors palette
async function loadBtns() {
  let btnsData = await fetch("colorsp.svg");
  let btnsFile = await btnsData.text();
  document.querySelector("#theColors").innerHTML = btnsFile;
  //call the event listener for buttons
  registerColors();
}

//add an event listener for every shapes of character
function registerEvent() {
  document.querySelector("#Shapes").addEventListener("click", clickShapes);
}
//add an event listener for every color
function registerColors() {
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
  const target = event.target;
  colr = target.id;
  if (target.id == "reset") {
    location.reload();
  }

  console.log("color: ");
  console.log(target);
  console.log("palette:" + target.style.fill);
}
