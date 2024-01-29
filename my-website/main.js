// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// let a = document.querySelector(".elem");
// console.log(a.getAttribute("data-image"));

console.log("hello?")
let elemC = document.getElementById("elem-container");
let fixedImage = document.getElementById("fixed-image");
elemC.addEventListener("mouseenter",()=>{
    // alert("finally");
    fixedImage.style.display = "block";
})
elemC.addEventListener("mouseleave",()=>{
    // alert("finally");
    fixedImage.style.display = "none";
})


let elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    // console.log(e.getAttribute("id"));
    e.addEventListener("mouseenter",()=>{
        let image = e.getAttribute("data-image");
        fixedImage.style.backgroundImage = `url(${image})`
    })

})