let figura = 1;

function cambiarFigura(num){
figura = num;
draw();
}

function draw(){

const canvas = document.getElementById("canvas");

if(canvas.getContext){

const ctx = canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "black";
ctx.strokeStyle = "black";


// RECTÁNGULO
if(figura == 1){

ctx.fillRect(50,50,120,120);
ctx.clearRect(80,80,60,60);
ctx.strokeRect(90,90,40,40);

}


// TRIÁNGULO
if(figura == 2){

ctx.beginPath();
ctx.moveTo(300,80);
ctx.lineTo(380,200);
ctx.lineTo(220,200);
ctx.closePath();
ctx.fill();

}


// LÍNEAS
if(figura == 3){

ctx.beginPath();
ctx.moveTo(100,250);
ctx.lineTo(200,300);
ctx.lineTo(100,350);
ctx.stroke();

}


// MUCHOS ARCOS
if(figura == 4){

for(let i=0;i<4;i++){
for(let j=0;j<3;j++){

ctx.beginPath();

let x = 200 + j*80;
let y = 80 + i*80;
let radius = 30;
let startAngle = 0;
let endAngle = Math.PI + (Math.PI*j)/2;
let counterclockwise = i%2==1;

ctx.arc(x,y,radius,startAngle,endAngle,counterclockwise);

if(i>1){
ctx.fill();
}else{
ctx.stroke();
}

}
}

}


// HAPPY FACE
if(figura == 5){

ctx.beginPath();
ctx.arc(300,200,100,0,Math.PI*2,true);
ctx.moveTo(370,200);
ctx.arc(300,200,70,0,Math.PI,false);

ctx.moveTo(260,160);
ctx.arc(250,160,10,0,Math.PI*2,true);

ctx.moveTo(360,160);
ctx.arc(350,160,10,0,Math.PI*2,true);

ctx.stroke();

}


// CURVA CUADRÁTICA
if(figura == 6){

ctx.beginPath();
ctx.moveTo(100,300);
ctx.quadraticCurveTo(300,100,500,300);
ctx.stroke();

}


// CURVA BEZIER
if(figura == 7){

ctx.beginPath();
ctx.moveTo(300,120);

ctx.bezierCurveTo(300,90,260,90,260,120);
ctx.bezierCurveTo(260,160,300,180,300,200);
ctx.bezierCurveTo(300,180,340,160,340,120);
ctx.bezierCurveTo(340,90,300,90,300,120);

ctx.fill();

}

}
}

window.onload = draw;