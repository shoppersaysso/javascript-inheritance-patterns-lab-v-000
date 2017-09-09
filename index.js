function Point( {
  this.x = x;
  this.y = y;
}

  Point.prototype.toString = function(x, y) {
    return("(" + this.x + "," + this.y + ")");
  }
