let input = document.getElementById("input");
let display = document.getElementById("display");

document.getElementById("btn").addEventListener("click", addItem);
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {   //can be processed by clicking the enter instead of manual mouse click
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

  //check line
  text.addEventListener("click", function() {
    text.style.textDecorationLine = "line-through";
  });

  //deletes / removes the value
  text.addEventListener("dblclick", function() {
    display.removeChild(text);
  });
}
