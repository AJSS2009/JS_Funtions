let color = "black";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "grey";
  } else if (event.key === "s") {
    color = "orange";
  } else if (event.key === "d") {
    color = "darkgrey";
  }
});

let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let color3 = document.querySelector("#color3");
let color4 = document.querySelector("#color4");

color1.addEventListener("click", () => (color1.style.backgroundColor = color));
color2.addEventListener("click", () => (color2.style.backgroundColor = color));
color3.addEventListener("click", () => (color3.style.backgroundColor = color));
color4.addEventListener("click", () => (color4.style.backgroundColor = color));

