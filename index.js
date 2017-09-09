function Point(x, y) {
  this.x = x;
  this.y = y;
}

  Point.prototype.toString = function(x, y) {
    return("(" + this.x + "," + this.y + ")");
  }

function Shape(x, y) {
  this.x = 0;
  this.y = 0;
}
