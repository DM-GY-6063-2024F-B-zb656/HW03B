
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 122, 78);

  for (y = 0; y < height; y += 60) {
    for (x = 0; x < width; x += 60) {
      noFill();
      stroke(171, 171, 171);
      strokeWeight(3);
      ellipse(x, y, 50);
    }
  }

  for (y = 30; y < height; y += 60) {
    for (x = 30; x < width; x += 60) {
      noFill();
      stroke(171, 171, 171);
      strokeWeight(3);
      ellipse(x, y, 50);
    }
  }

  for (y = 100; y < width; y += 200) {
    for (x = 100; x < width; x += 200) {
      noStroke();
      fill(24,86,245);
      ellipse(x,y,100,50);
      ellipse(x + 100, y + 100, 100, 50);
      triangle(x - 70,y - 25, x - 30, y,x - 70,y + 25);
      triangle(x + 130, y + 100, x + 170, y +75, x + 170, y + 125);
      fill(0,0,0);
      ellipse(x + 30,y - 5,8);
      ellipse(x + 70, y + 95 , 8)


    } 
  }

}

function draw() {}
