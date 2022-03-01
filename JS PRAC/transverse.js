console.log("hello world!");

let element = document.querySelector(".parent");
/*
console.log(element.children);//displays all existing tags within .parent class (HTML collections)
console.log(element.childNodes);//displays the newlinespace (text) and all existing elements
console.log(element.firstChild);//text
console.log(element.firstElementChild);//displays first element
console.log(element.lastChild);//text
console.log(element.lastElementChild);//displays last element
console.log(element.childElementCount);//displays the total no. of elements
console.log(element.firstElementChild.nextElementSibling);//prints second element
console.log(element.firstElementChild.nextElementSibling.nextElementSibling);//prints 3rd and so on
*/
console.log(element.parentNode);