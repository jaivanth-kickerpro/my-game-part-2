var gameState="loading";


function setup(){
createCanvas(displayWidth,displayHeight);
form1=new form();


}
function draw(){

if(gameState=="loading"){
background(5);
textSize(80);
fill("red");
text("loading...",displayWidth/2-150,displayHeight-100);

if(frameCount===100){
gameState="start";  
}

}

if(gameState=="start"){
clear()
background(125);
form1.display();
}







//drawSprites()
}