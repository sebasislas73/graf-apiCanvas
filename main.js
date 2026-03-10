function draw(){

const canvas = document.getElementById("canvas");

if(canvas.getContext){

const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.strokeStyle = "black";


// 1 RECTÁNGULO
ctx.fillRect(40,40,100,100);
ctx.clearRect(60,60,60,60);
ctx.strokeRect(65,65,50,50);


// 2 TRIÁNGULO
ctx.beginPath();
ctx.moveTo(250,40);
ctx.lineTo(300,140);
ctx.lineTo(200,140);
ctx.closePath();
ctx.fill();


// 3 LÍNEAS
ctx.beginPath();
ctx.moveTo(400,40);
ctx.lineTo(500,100);
ctx.lineTo(400,140);
ctx.stroke();


// 4 ARCOS (VARIOS)
for(let i=0;i<4;i++){
for(let j=0;j<3;j++){

ctx.beginPath();

let x = 80 + j*60;
let y = 220 + i*60;
let radius = 20;
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


// 5 HAPPY FACE
ctx.beginPath();
ctx.arc(350,300,60,0,Math.PI*2,true);
ctx.moveTo(390,300);
ctx.arc(350,300,40,0,Math.PI,false);

ctx.moveTo(330,280);
ctx.arc(320,280,5,0,Math.PI*2,true);

ctx.moveTo(380,280);
ctx.arc(370,280,5,0,Math.PI*2,true);

ctx.stroke();


// 6 CURVA CUADRÁTICA
ctx.beginPath();
ctx.moveTo(500,250);
ctx.quadraticCurveTo(600,150,650,250);
ctx.stroke();


// 7 CURVA BEZIER
ctx.beginPath();
ctx.moveTo(520,350);

ctx.bezierCurveTo(520,320,480,320,480,350);
ctx.bezierCurveTo(480,380,520,400,520,420);
ctx.bezierCurveTo(520,400,560,380,560,350);
ctx.bezierCurveTo(560,320,520,320,520,350);

ctx.fill();

}

}

window.onload = draw;