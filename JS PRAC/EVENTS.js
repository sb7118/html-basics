console.log("hello world");
let element = document.getElementById("heading");
element.className = "h1";



document.getElementById("heading").addEventListener("click" , function (e){
    console.log("you have clicked heading");
    // location.href = 'https://youtube.com';
    mnb = e.target;//prints the clicked elements
    mnb = e.target.className;//prints class name of target
    mnb = e.target.id;//prints id of target
    mnb = Array.from(e.target.classList);
    // mnb = e.offsetX;
    // mnb = e.offsetY;
    console.log(mnb);
})

document.querySelector("h1").addEventListener("click" , color);
function color(){
    document.querySelector(".h1").style.background = "green";
    document.querySelector(".h1").style.color= "red";
}

document.querySelector("h1").addEventListener("mouseover" , remove);
function remove(){
    document.querySelector("h1").removeEventListener("click" ,color);
}

document.querySelector(".child").addEventListener("click" , change);
function change() {
    document.querySelector(".child").innerHTML = "im changed!!";
}
// document.querySelector("h1").addEventListener('load' , text);
// function text(){
//     console.log('nothing to see here');
// }

//Examples of events
let body = document.querySelector("body");
body.style.backgroundColor = "red";

//mouse out
body.addEventListener("mouseout" , function () {
    body.style.textAlign= "center";
});


//mouseover
body.addEventListener("mouseover" , function (){
    body.style.backgroundColor = "yellow";
})

//mouseleave
body.addEventListener("mouseleave" , function(){
    element.innerHTML = "im heading"
})

//keydown
let input1 = document.createElement('input');
input1.setAttribute('placeholder' , 'keyup');
let div1 = document.getElementById('3');
div1.innerHTML = "<br>"
div1.appendChild(input1);

input1.addEventListener('keydown' , function(){
    console.log(input1.value);
})

//keypress
let input2 = document.createElement('input');
input2.setAttribute('placeholder' , 'keypress');
let div2 = document.getElementById('2');
div2.innerHTML = "<br>"
div2.appendChild(input2);

input2.addEventListener('keypress' , function(){
    console.log(input2.value);
})

//keyup
let input3 = document.createElement('input');
input3.setAttribute('placeholder' , 'keydown');
let div3 = document.getElementById('1');
div3.innerHTML = "<br>"
div3.appendChild(input3);

input3.addEventListener('keyup' , function (){
    console.log(input3.value)
})

//window events
let btn2 = document.createElement("button");
btn2.innerHTML = "open window" ;
let parentDiv = document.getElementById("parent");
parentDiv.appendChild(btn2);

btn2.addEventListener('click' , function(){
    window.open("https://facebook.com" ,"" , "width=500px,height=500px , left=200px , top=300px");
})


