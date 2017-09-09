function Point(x, y) {
  this.x = x;
  this.y = y;
}

  Point.prototype.toString = function(x, y) {
    return("(" + this.x + "," + this.y + ")");
  }

function Side(length) {
  this.length = length;
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
}

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {
  return(this.radius * 2);
}
Circle.prototype.area = function() {
  return(this.radius * this.radius * Math.PI)
}
Circle.prototype.circumference = function() {
  return(2 * this.radius * Math.PI)
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides
}
