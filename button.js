class button {
  //contstuctor class established (to be used later)
  constructor(x, y, w, h, labels) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.labels = labels;
    this.index = 0;

    //button styalisation and text
    this.button = createButton(this.labels[this.index]);
    this.button.size(w, h);
    this.button.position(this.x - this.w / 2, this.y - h);
    this.button.style("font-family", "Courier New");
    this.button.style("font-size", "28px");
    this.button.style("background-color", "#D3D0D0");
  }

  //resets array if more than array lenght (start, showering, changing, cleaning, reset)
  next() {
    this.index++;
    if (this.index >= this.labels.length) {
      this.index = 0;
    }
    this.button.html(this.labels[this.index]);
  }

  //placement of images
  imgDisplay(offsetX = 0, offsetY = 0) {
    let current = this.labels[this.index];
    let imgX = offsetX + 305;
    let imgXX = offsetX + 220;
    let imgY = offsetY + 60;
    let imgZ = offsetX + 360;

    //link images to text (shower states), place and scale images
    if (current === "Start") {
    } else if (current === "Changing") {
      image(img2, imgX, imgY, 200, 400);
    } else if (current === "Cleaning") {
      image(img3, imgXX, imgY, 400, 330);
    } else if (current === "Reset") {
      image(img4, imgZ, imgY, 110, 330);
    }
  }
}
