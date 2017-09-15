var canvas = document.getElementById('draw');
var context = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

//canvas.style.width = '100%';
//canvas.style.backgroundColor = 'pink';

context.rect(100,200,50,20);
context.fillStyle = 'blue';
context.fill();


context.arc(60, 60, 50, 0, 2*Math.PI, false);
context.fill();


