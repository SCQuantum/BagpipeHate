let colors = [[92,255,130], // Green
              [255,145,0], // Orange
              [238,242,0], // Yellow
              [255,255,255], // White
              [255,25,25], // Red
              [66,135,245], // Blue
              [156,126,75],
              [0,0,0]];

let lineColor = 0;
let colorSize = 50;
let lineWeight = 12;
var dist = 0;


function generateRandString(length) {
  let string = "";
  for (let i = 0; i < length; i++) {
    string = string + Math.random().toString(10);
  }
  return string;
}

let sketch = function(p) {
  p.setup = function(){
    p.createCanvas(400, 400);
    p.background(66, 135, 245);

    dist = p.height / colors.length;

    for (let i = 0; i < colors.length; i++) {
      p.fill(colors[i]);
      p.rect(0,i*(p.height / colors.length),colorSize,(p.height / colors.length));
    }

    p.strokeWeight(lineWeight)
  }

  p.touchMoved = function() {
    if (p.mouseX > colorSize + 8 + lineWeight / 2) {
      p.stroke(colors[lineColor]);
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      return false;
    }
  }

  p.mouseClicked = function() {

    if (p.mouseX <= colorSize) {
      let clickedSlot = Math.floor(p.mouseY / dist);
      lineColor = clickedSlot;
    }
  }
};
  new p5(sketch, 'p5-canvas');

