// pick
// push();
// translate(width/2, height/2);
// rectMode(CENTER);
// angleMode(DEGREES);
// rotate(pick_location);
// noStroke();
// fill(222,37,88);
// rect(0,-142, 10, 26, 3);
// pop();

class Tumbler{
  constructor(_angle){
    this.x = 0;
    this.y = -142;
    this.angle = _angle;
  }

  show(){
    push();
    translate(width/2, height/2);
    rectMode(CENTER);
    angleMode(DEGREES);
    rotate(this.angle);
    noStroke();
    fill(222,37,88);
    rect(0,-142, 10, 26, 3);
    pop();
  }

  relocate(){
    return this.angle = floor(random(360));
  }
}
