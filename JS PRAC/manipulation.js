console.log("hello world!");

//creating , removing and replacing elements through JS

//CREATION
let element = document.createElement("h2");//creates element
element.className = "dummy";//given classname
element.id = "h2";//id name
element.setAttribute("title","dummy heading");//setting attribute ("name","value")
/*element.innerText= "this is a dummy text";//displays text 
element.innerText= "this is a dummy text";*/

//we can also display text through createTextNode() method
let text = document.createTextNode("this is a dummy text");
element.appendChild(text);//appending text to the element

let qwe = document.querySelector(".parent");
qwe.appendChild(element);//appends element after div.parent
 console.log(element);

//REPLACEMEN & REMOVEing
let qwerty = document.createElement("h1");
qwerty.className="h1";
qwerty.id = "h2";

let tnode = document.createTextNode("this was the replaced element");
qwerty.appendChild(tnode);

 element.replaceWith(qwerty);//replacing element with qwerty

 let parent = document.getElementById("parent");
 parent.replaceChild(element,document.getElementById("1"));
 




