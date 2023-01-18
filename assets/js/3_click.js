// let ele = document.getElementById("ele1");
// ele.addEventListener("click", function (pintar = "green") {
//   ele.style.background = "yellow";
// });

function pintar(elemento) {
  elemento.style.backgroundColor = "yellow";
}
let ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  pintar(ele);
});
