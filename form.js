class form{
constructor(){
this.play=createButton("play Now")
this.worldtour=createButton("world Tour")
this.Trainingsession=createButton("Trainingsession")

}
display(){
this.play.position(displayWidth/2,displayHeight/2);
this.play.mousePressed(()=>{
   this.play.hide();
    gameState="choose"});

   


}

}