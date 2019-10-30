"use strict";

let colr = "";
const box = document.querySelector("#square");

window.addEventListener("DOMContentLoaded", start);

function start() {
  loadSVG();
  loadColors();
}

//Fetch the character
async function loadSVG() {
  let svgData = await fetch("sp.svg");
  let svgFile = await svgData.text();
  document.querySelector("#theSVG").innerHTML = svgFile;
  //call the event listener for character
  registerEvent();
}

//Fetch the colors palette
async function loadColors() {
  let colorsData = await fetch("colorsp.svg");
  let colorsFile = await colorsData.text();
  document.querySelector("#theColors").innerHTML = colorsFile;
  //call the event listener for colors
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

//When you click a shape, add selected color (if any)
function clickShapes(event) {
  const target = event.target;

  if (colr == "") {
    alert("Please select a color to fill this field");
  } else {
    target.style.fill = colr;
  }
  console.log("clicked: " + target);
  console.log("Shape color:" + target.style.fill);
}

//When you click a color, select it
function clickColors(event) {
  const target = event.target;
  colr = target.id;

  if (target.id == "reset") {
    location.reload();
  }
  showColor();
  console.log("palette:" + target.style.fill);
}

function showColor() {
  // const target = event.target;
  box.style.backgroundColor = colr;
}
