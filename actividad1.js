function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var fila = 0;
  var x = color(0, 0, 0);
  var y = color(255, 255, 255);
  while (fila < 8) {
    if (fila % 2 == 0) {
      x = color(0, 0, 0);
      y = color(255, 255, 255);
    } else {
      x = color(255, 255, 255);
      y = color(0, 0, 0);
    }
    var columna = 0;
    while (columna < 8) {
      if (columna % 2 == 0) {
        fill(y);
      } else {
        fill(x);
      }
      rect(columna * 50, fila * 50, 50, 50);
      columna = columna + 1;
    }
    fila = fila + 1;
  }
}
