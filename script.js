let sketch = function(p) {
  p.setup = function(){
    p.createCanvas(400, 400);
    p.background(66, 135, 245);
  }

  p.draw = function(){
    p.stroke(0)
    p.line(0,0, p.mouseX, p.mouseY);
  }
};
  new p5(sketch, 'p5-canvas');