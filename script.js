let sketch = function(p) {
  p.setup = function(){
    p.createCanvas(400, 400);
    p.background(66, 135, 245);
    p.stroke(67, 209, 105)
    p.strokeWeight(40)
  }

  p.touchMoved = function() {
    p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    return false;
  }
};
  new p5(sketch, 'p5-canvas');