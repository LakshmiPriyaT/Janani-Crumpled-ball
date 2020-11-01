class Box{

    constructor(x,y,width,height){
        /*var options={
            'restitution':0,
            'friction':2,
            'density':1.0,

        }*/
        this.angle = 0
          this.body = Bodies.rectangle(x,y,width,height);
         this.width = width;
         this.height= height;
         Matter.Body.setAngle(this.body, this.angle);
         World.add(world,this.body);
}

display(){
    var pos = this.body.position;
    //var angle=this.body.angle;
     push();
    translate(pos.x,pos.y);
    rotate(this.angle);
    angleMode(RADIANS);
    strokeWeight(2);
    stroke("black");
    fill("yellow");
    rect(0,0,this.weight,this.height);
    pop();

   }
};