let pick, tumbler, score, gfont, gc;

function preload() {
  gfont = loadFont('libraries/game_font.ttf');
}

function setup() {
  createCanvas(375, windowHeight);
  ended = false;
  gc = new Controller();

  pick = new Pick();
  tumbler = new Tumbler(floor(random(360)));
  score = 0;
}

function touchStarted() {
  if (gc.game_started) {
    if(mouseY > 80){
      pick.checkLock();
    }
    gc.pause_check(mouseX, mouseY);
    gc.exit_check(mouseX, mouseY);
  } else {
    gc.game_started = true;
  }

  return false;
}

function draw() {
  background(95, 64, 134);


  if (!gc.game_started) {
    gc.main_menu();
  } else {
    // locker
    noStroke()
    fill(6, 20, 53);
    ellipse(width / 2, height / 2, 320);
    fill(95, 64, 134);
    ellipse(width / 2, height / 2, 250);

    gc.score();

    gc.pause_button();
    gc.pause_text('PAUSED');

    gc.exit_button();


    tumbler.show();
    pick.show();
  }

}
