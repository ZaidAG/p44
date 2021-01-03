class Glob{
    constructor(x,y,radius){
        var options={
          isStatic:false,
          resetitution:10,
          friction:0.5,
        }
        this.radius=radius
        this.body=Bodies.circle(x,y,this.radius,options);
        //this.image=loadImage();
    }
    attacks(){
        
    }
    weapons(){

    }
    keyPressed(){
      if(keyCode==="space"){
       //image=loadImage();
      }
      if(keyCode===DOWN_ARROW){
        //image=loadImage();
      }
    }
    display(){
     var pos=this.body.position
     push();
     translate(pos.x,pos.y);
     ellipseMode(CENTER)
     ellipse(0,0,this.radius);
     pop();
    }
}