class box extends Base{
    constructor(x,y){
        super(x,y,windowWidth/25,windowHeight/10)
        this.a=255
    }
    display(){

        console.log(this.body.speed)

        if(this.body.speed<7){
            rectMode(CENTER)
            fill("cyan")
            rect(this.body.position.x,this.body.position.y,windowWidth/25,windowHeight/10)
        }
        else{
            push()
            tint(255,this.a)
            this.a=this.a-0.01
            fill("cyan")
      //      World.remove(world,this.body) 
            pop()
        }
    }
}