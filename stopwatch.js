class Stopwatch {
  //constructor class created
  constructor(x, y) {
    this.minutes = 0;
    this.seconds = 0;
    this.x = x;
    this.y = y;
    this.lastTick = 0;
    this.running = false;
  }
  //prevents jump
  start() {
    this.running = true;
    this.lastTick = millis();
  }

  //update - if 60 seconds reached, turn into a minute
  update() {
    if (!this.running) return;

    if (millis() - this.lastTick >= 1000) {
      this.lastTick = millis();
      this.seconds++;

      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
      }
    }
  }

  //styalise timer and show second count
  display() {
    textAlign(CENTER);
    textSize(50);
    textFont("Courier New");
    fill(0);

    text(nf(this.minutes, 2) + ":" + nf(this.seconds, 2), this.x, this.y);
  }

  //reset brings time back to 0
  reset() {
    this.minutes = 0;
    this.seconds = 0;
    this.running = false;
    this.lastTick = millis();
  }
  //minutes add up
  addMinutes(mins) {
    this.minutes += mins;
  }
}
