//this class assembles different classes together

class Shower {
  //constructor created
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    // state of threshold
    this.thresholdOffset = 0;
    this.resetColour = false;

    // stopwatch created
    this.stopwatch = new Stopwatch(
      this.x + this.w / 2,
      this.y + this.h / 2 +200
    );

    //kids button created and placed
    this.buttonKids = new ButtonKids(
      this.x + this.w - 50,
      this.y + this.h - 550,
      85,
      40,
      this
    );

    // main state button created
    const commands = ["Start", "Changing", "Cleaning", "Reset"];
    this.myButton = new button(
      this.x + this.w / 2,
      this.y + this.h - 10,
      150,
      50,
      commands
    );

    //when button clicked, move through array
    this.myButton.button.mouseClicked(() => {
      this.myButton.next();

      //if button is pressed once, start stopwatch
      if (this.myButton.index === 1) {
        this.stopwatch.reset();
        this.stopwatch.start();
      }

      //if button is pressed four times, reset the stopwatch (but don't automatically start it, bring threshold offset to 0, add a figure to the stickman count, reset the colour of the kids button)
      if (this.myButton.index === 0) {
        this.stopwatch.reset();
        this.thresholdOffset = 0;
        stickmanCount++;
        this.buttonKids.resetColour();
      }
    });
  }
  //stopwatch update function
  update() {
    this.stopwatch.update();
  }

  //display background, stopwatch and main button
  display() {
    this.drawBackground();
    this.stopwatch.display();
    this.myButton.imgDisplay(this.x, this.y);
  }

  drawBackground() {
    //changes colour depending on what time stamp used (please note, for real use I would make these timestamps higher, but have kept the values low for demonstration purposes)
    let t = this.stopwatch.minutes - this.thresholdOffset;
    if (t < 1) {
      fill(185, 227, 184);
    } else if (t < 2) {
      fill(231, 237, 166);
    } else if (t < 3) {
      fill(245, 200, 144);
    } else {
      fill(245, 153, 144);
    }
    //draws shape
    rect(this.x, this.y, this.w, this.h);
  }
}
