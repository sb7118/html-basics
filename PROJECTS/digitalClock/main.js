console.log("hello world!");

const clock = document.querySelector(".box");
function digitalClock(){
    let date = new Date();
    let hours = date.getHours().toString().padStart(2,0);
    let minutes = date.getMinutes().toString().padStart(2,0);
    let seconds = date.getSeconds().toString().padStart(2,0);

    // AM or PM
    let am_pm = "AM";
    am_pm > 11? am_pm = "AM" : am_pm="PM";

    //form 24hr to 12hr clock
    hours = hours % 12 || 12;

    clock.textContent = `${hours}:${minutes}:${seconds} ${am_pm}`;
}

setInterval(digitalClock,1000);

//initial update/call
digitalClock()