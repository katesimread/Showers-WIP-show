class ButtonKids {
  //create constructor
  constructor(x, y, w, h, shower) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shower = shower;
    
    //button created
    this.buttonKids = createButton("Kids");
    this.buttonKids.size(w, h);
    this.buttonKids.position(this.x - this.w / 2, this.y-70);

    //button styalised
    this.buttonKids.style("font-family", "Courier New");
    this.buttonKids.style("font-size", "30px");
    this.buttonKids.style("background-color", "#D3D0D0");
    this.buttonKids.style("border", "1px solid black");
    
    //if button pressed, turn blue to indicate children in shower, increase threshold at which shower user needs to finish
    this.buttonKids.mouseClicked(() => {
    this.shower.thresholdOffset += 1;
    this.buttonKids.style("background-color", "rgb(104, 175, 176)");
    });
  }
  
  //Changes colour of button back to grey (will happen once main label array has been moved through)
    resetColour() {
    console.log("resetColour() called");
  this.buttonKids.style("background", "#D3D0D0ff");
  this.buttonKids.style("background-color", "#D3D0D0");
  this.buttonKids.style("background-image", "none");
  this.buttonKids.style("color", "#000000");

  }
}
