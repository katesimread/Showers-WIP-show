//global variables
let shower1, shower2, shower3, shower4, shower5, shower6;
let img1, img2, img3, img4, img5;
let stickmanCount = 0;

//load images in
function preload() {
  img2 = loadImage("pictures/shower-1.png");
  img3 = loadImage("pictures/tShirt.png");
  img4 = loadImage("pictures/bleach.png");
  img5 = loadImage("pictures/stickman.png");
}

function setup() {
  //divides canvas
  createCanvas(windowWidth, windowHeight);
  const whiteBarTop = (height / 10) * 9;
  const cols = 3;
  const rows = 2;
  const showerW = width / cols;
  const showerH = whiteBarTop / rows;

  //draw showers from shower class
  shower1 = new Shower(0 * showerW, 0 * showerH, showerW, showerH);
  shower2 = new Shower(1 * showerW, 0 * showerH, showerW, showerH);
  shower3 = new Shower(2 * showerW, 0 * showerH, showerW, showerH);
  shower4 = new Shower(0 * showerW, 1 * showerH, showerW, showerH);
  shower5 = new Shower(1 * showerW, 1 * showerH, showerW, showerH);
  shower6 = new Shower(2 * showerW, 1 * showerH, showerW, showerH);
}

function draw() {
  //update and display showers
  shower1.update();
  shower1.display();

  shower2.update();
  shower2.display();

  shower3.update();
  shower3.display();

  shower4.update();
  shower4.display();

  shower5.update();
  shower5.display();

  shower6.update();
  shower6.display();

  //draw white rectangle at bottom of screen
  fill(255);
  rect(0, (windowHeight / 10) * 9, windowWidth, (windowHeight / 10) * 9);

  //draw box for counting
  rect(windowWidth - 50, (windowHeight / 10) * 9, 50, 50);

  // number inside the bottom-left box
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(stickmanCount, windowWidth - 25, (windowHeight / 10) * 9 + 25);

  //stickman code
  let stickmanSpacing = 28;
  let stickmanW = 30;
  let stickmanH = 80;
  let startX = 10;

  //calculates if row is full
  let counterBoxWidth = 50;
let stickmanRightLimit = windowWidth - counterBoxWidth;
let maxStickmen = floor((stickmanRightLimit - startX) / stickmanSpacing);
  let passCount = floor(stickmanCount / maxStickmen);
  let currentPassCount = stickmanCount % maxStickmen;
  let rowIsFull = passCount > 0;

  // if row is full, make opacity 50%
  if (rowIsFull) {
    tint(255, 127);

    //stickman for loop
    for (let i = 0; i < maxStickmen; i++) {
      image(
        img5,
        startX + i * stickmanSpacing,
        windowHeight - stickmanH,
        stickmanW,
        stickmanH
      );
    }
  }

  // new line of stickmen at full opacity
  tint(255, 255);

  for (let i = 0; i < currentPassCount; i++) {
    image(
      img5,
      startX + i * stickmanSpacing,
      windowHeight - stickmanH,
      stickmanW,
      stickmanH
    );
  }

  // reset tint
  tint(255, 255);
}

//full screen function
function keyPressed() {
  if (key === "f") {
    fullscreen(!fullscreen());
  }
}
