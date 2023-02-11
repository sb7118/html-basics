let input = document.getElementById("input");
let display = document.getElementById("display");

document.getElementById("btn").addEventListener("click", addItem);
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    addItem();
    event.preventDefault();
    document.getElementById("input").submit;
  }
});

function addItem() {
  let text = document.createElement("pre");
  text.innerHTML = `<h1> ${input.value} </h1>`;
  display.appendChild(text);
  input.value = "";

  text.addEventListener("click", function() {
    text.style.textDecorationLine = "line-through";
  });

  text.addEventListener("dblclick", function() {
    display.removeChild(text);
  });
}
