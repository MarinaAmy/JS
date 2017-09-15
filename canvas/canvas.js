var canvas = document.getElementById('draw');
var context = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

//canvas.style.width = '100%';
canvas.style.backgroundColor = 'lightgrey';

context.rect(100,200,50,20);
context.fillStyle = 'blue';
context.fill();

context.beginPath(); //repart sur un new dessin
context.fillStyle = 'lightyellow';
context.arc(60, 60, 50, 0, 0.7*Math.PI, false);
context.fill();

context.beginPath();
context.moveTo(150, 200);
context.lineTo(100,100);
context.strokeStyle = 'black';
context.lineWidth = 5;
context.stroke();

//var img = new Image(); // sprite
//img.src = 'fille.jpg';

//context.drawImage(img,0,0);
var x = 0,
    speed = 50,
    direction = 1;
function draw(){
    x += speed*direction;

    if(x > canvas.width - 25){
        direction = -1;
    }
    else if(x < 0) {
        direction = 1;
    }
    //x+= speed;
    context.beginPath();
    context.rect(x, canvas.height/2 ,25,25);
    context.fillStyle = 'purple';
    context.fill();
    
}

 
function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw();
}

setInterval(animate, 1000/30); //30 images par secondes

setInterval(animate, 500);