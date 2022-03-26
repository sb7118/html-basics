let canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');


//declaring variables
let x = 300;
let y = 200;
let radius = 50;
let dx = 2;
let dy =2;
var mouse = {
    x:undefined,
    y:undefined
}
//interacting with circles
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})

//creating an object
function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;//velocity of x
    this.dy = dy;//velocity of y
    this.radius = radius;

    this.draw = function(){
        //circle
        context.beginPath();
        context.arc(this.x ,this.y ,this.radius ,0 ,2*Math.PI ,false);
        context.lineWidth = 2;
        context.stroke();
    }

    // to keep circle inside canvas window
    this.update = function (){
        if(this.x+this.radius > canvas.width ||this.x-this.radius <0){
            this.dx = -this.dx
        }

    
        if(this.y+this.radius > canvas.height || this.y-this.radius <0){
            this.dy = -this.dy
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}

let circleArray = [];
for(let x = 0; x<100 ; x++){
    let x = Math.random()* canvas.width;
    let y = Math.random()* canvas.height;
    let dx = (Math.random()-0.5)*2;
    let dy = (Math.random()-0.5)*2;
    circleArray.push(new Circle(x,y , dx ,dy , radius));

}
let circle = new Circle(300, 300, 2, 2, 50);

function animate(){


    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width , canvas.height);
    for(i =0 ; i<circleArray.length;i++){
        circleArray[i].update();
    }
}

animate();