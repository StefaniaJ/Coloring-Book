"use strict";
let buttons = document.querySelectorAll("button");
var colr = "white";

window.addEventListener("DOMContentLoaded", loadSVG);

async function loadSVG() {
  let svgData = await fetch("sp.svg");
  let svgFile = await svgData.text();
  document.querySelector("#theSVG").innerHTML = svgFile;

  registerEvent();
}

function registerEvent() {
  // document.querySelector("#Circle").addEventListener("click", clickCircle);
  document.querySelector("#Shapes").addEventListener("click", clickShapes);
}

// function clickCircle() {
//   console.log("circle clicked");
// }

function clickShapes(event) {
  const target = event.target;
  console.log("clicked: ");
  console.log(target);
  console.log("Color:" + target.style.fill);
  target.style.fill = colr;
}
buttons.forEach(setClr);
function setClr(btn) {
  btn.addEventListener("click", function() {
    colr = this.id;
    if (btn.id == "reset") {
      location.reload();
    }
  });
  btn.style.backgroundColor = btn.id;
}
