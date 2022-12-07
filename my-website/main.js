console.log("hello world!");
//always initialize the arrow function first
let open_facebook=  () =>  {
    window.open("https://facebook.com/sujan.baskota.3348/");
}
let open_instagram = () => {
    window.open("https://www.instagram.com/sujan_096/");
}
let open_pinterest= () => {
    window.open("https://www.pinterest.com/pixure_71118/");
}
let open_anime= () => {
    window.open("https://www.zoro.to/");
}
let open_gitHub= () => {
    window.open("https://www.github.com/sb7118/")
}
document.getElementById("facebook").addEventListener("click",open_facebook);
document.getElementById("instagram").addEventListener("click",open_instagram);
document.getElementById("pinterest").addEventListener("click",open_pinterest);
document.getElementById("anime").addEventListener("click",open_anime);
document.getElementById("github").addEventListener("click",open_gitHub);
