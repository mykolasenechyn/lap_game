class Controller{
  constructor(){
    this.game_started = false;
    this.paused = false;

    this.text_size = 24;
    this.text_speed = 0;
  }

  score(){
    // Score
    push();
    translate(width / 2, height / 2);
    fill(133, 102, 173);
    textAlign(CENTER);
    textFont(gfont);
    textSize(80);
    text(score, 0, 40);
    pop();
  }

  main_menu(){

    push();
    textAlign(CENTER);
    textSize(this.text_size);
    fill(250);
    textFont(gfont);
    text('Touch to Start', width/2, height/2+100);
    pop();

    // credit
    push();
    textAlign(CENTER);
    textSize(14);
    fill(133,102,173);
    text('Made By', width/2, height-50);
    fill(255);
    text('Mykola Senechyn', width/2, height-30);
    pop();

    let tspeed = 0.25;
    let tmin = 24;
    let tmax = 30

    if(this.text_size > tmax){
      this.text_speed = -tspeed;
    } else if(this.text_size <= tmin){
      this.text_speed = tspeed;
    }

    this.text_size += this.text_speed;
  }

  pause_check(_mx, _my){
    if(_mx > width - 50 && _mx < (width - 50) + 40 && _my > 10 && _my < (10) + 40){

      if(!this.paused){ // pause
        noLoop();
        this.paused = true;
      } else { // unpause
        loop();
        this.paused = false;
      }
      return true;
    }
    return false;
  }

  pause_text(_text){
    if(this.paused){
      let tsize = 24;
      push();
      textAlign(CENTER);
      textSize(tsize);
      fill(250);
      textFont(gfont);
      text(_text, width/2, 45);
      pop();
    }
  }

  pause_button(){
    // pause button
    fill(120, 89, 160);
    rect(width - 50, 10, 40, 40, 3);
		fill(255);
		if(gc.paused){
			beginShape();
			vertex(width - 38, 19);
			vertex(width - 20, 29);
			vertex(width - 38, 40);
			endShape();
		} else {
			rect(width - 38, 19, 5, 21, 3);
			rect(width - 26, 19, 5, 21, 3);
		}
  }

  exit_button(){
    // pause button
    push();
    fill(120, 89, 160);
    rect(10, 10, 40, 40, 3);
		stroke(255);
    strokeWeight(5);
    line(20, 20, 40, 40);
    line(40, 20, 20, 40);
    pop();
  }

  exit_check(_mx, _my){
    if(_mx > 10 && _mx < (10) + 40 && _my > 10 && _my < (10) + 40){

      if(this.game_started){
        this.game_started = false;
        this.game_restart();
      }
      return true;
    }
    return false;
  }

  game_restart(){
    pick.angle = 0;
    pick.speed = 0.5;
    tumbler.angle = floor(random(360));
    score = 0;
  }
}
