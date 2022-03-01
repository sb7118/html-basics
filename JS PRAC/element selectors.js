console.log("welcome to js practice");
//ELEMENT SELECTORS

//SINGLE ELEMENT SELECTORS
let element = document.getElementById("1");
// element.innerHTML="i am a good boy";
// element=element.styleSheets.color="red";
element.style.color="red";
element.innerText="i am a good boy";
//i can use htlm tag inside inner.html
element.innerHTML="<i>i am a good boy</i>";
console.log(element);

let qwe = document.querySelector("#parent");
qwe = document.querySelector(".child-2");
qwe.innerHTML="im in second line";
qwe = document.querySelector("h1");
qwe.style.color="gold";
console.log(qwe);

//MULTI ELEMENT SELECTOR
let asd = document.getElementsByClassName("child");
asd = document.getElementsByClassName("parent");
asd = document.getElementsByTagName("div");
console.log(asd);
Array.from(asd).forEach(function(element){
    // element = document.innerHTML="<i> lol</i>"
    element.style.color="blue";

    console.log(element);
})