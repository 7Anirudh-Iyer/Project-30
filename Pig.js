class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.a=255
  }

  display(){

    console.log(this.body.speed)

    if(this.body.speed<3){
      super.display()
    }
    else{
      push()
     tint(255,this.a)
     this.a=this.a-5
     image(this.image,this.body.position.x,this.body.position.y,50,50)
     World.remove(world,this.body) 
     pop()
    }
  }

};