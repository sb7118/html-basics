let canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);
})
 
var gravity =1;
var friction = 0.9;

    
var mouse ={
    x:undefined,
    y:undefined
}

    //objects
    function Ball(x, y,dy, radius) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.radius = radius;

        this.draw = function () {
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            ctx.stroke();
            ctx.closePath();

        }

        this.update = function () {
            if(this.y + this.radius > canvas.height){
                this.dy = -this.dy * friction;
            }else{
                this.dy +=gravity;
                console.log(this.dy)
            }
            this.y+=this.dy;
            this.draw();
        }
    }
    var ball;
    //implementation
    function init(){
        ball = new Ball(canvas.width/2 , canvas.height/2 ,3, 30);
        
    }

    //animation loop
    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,canvas.width , canvas.height);
        // ctx.fillText("gravity" , mouse.x , mouse.y);
        ball.update();
    }
    init();
    animate();