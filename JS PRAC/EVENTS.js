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
    mnb = e.offsetX;
    mnb = e.offsetY;
    console.log(mnb);
})