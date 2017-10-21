
class Pick{
  constructor(){
    this.angle = 0;
    this.x = 0;
    this.y = -142;
    this.speed = 0.5;
    this.speed_incr = 0.25;
    this.padding = 5;
  }

  show(){
    push();
    translate(width/2, height/2);
    angleMode(DEGREES);
    rotate(this.angle);
    noStroke();
    fill(233,203,64);
    ellipse(this.x,this.y, 20);
    pop();

    if(this.angle >= 360){
     this.angle = 0;
    }

    this.angle += this.speed ;
  }

  checkLock(){
    if(this.angle > tumbler.angle - this.padding && this.angle < tumbler.angle + this.padding){
      tumbler.relocate();
      this.speed = this.speed + this.speed_incr;
      this.padding = this.padding + 0.25;
      score++;
    } else {
      gc.game_restart();
    }
  }
}
