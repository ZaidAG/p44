class Ground{
    constructor(x, y, width, height){
        var options={
            isStatic:true,
            resetitution:0,
            friction:10
        }
        this.height=height
        this.width=width
        this.body=Bodies.rectangle(x,y,this.width,this.height);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}