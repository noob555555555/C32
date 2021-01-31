class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.TragectoryArr = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x > 200 && this.body.velocity.x > 10){  
      var Position = [this.body.position.x, this.body.position.y]
      this.TragectoryArr.push(Position)
    }
    for(var i = 0; i < this.TragectoryArr.length; i++){
      image(this.smokeImage, this.TragectoryArr[i][0], this.TragectoryArr[i][1]);
    }
    
  }
}
