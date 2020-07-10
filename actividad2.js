function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  for (y = 500; y > 16; y = y - 16){
  if (y % 3 == 0){
    fill(0, 0, 255);
  }
  if (y % 3 == 1){
    fill(0, 255, 0);
  }
  if (y % 3 == 2){
    fill(255, 0, 0);
    }
      circle(250, 250, y);
  
}
