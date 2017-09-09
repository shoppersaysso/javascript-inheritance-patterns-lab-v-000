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
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
  var p = 0;
  for(var i=0;i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}

Polygon.prototype.numberOfSides = function() {
  return(this.sides.length);
}

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
  Quadrilateral.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)]);
}

Triangle.prototype = Object.create(Rectangle.prototype);
Triangle.prototype.constructor = Triangle;
Rectangle.prototype.area = function() {
  return(this.width * this.height);
}

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}


Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return(this.width * this.height);
}

function Square(side) {
  Rectangle.call(this, [new Side(side), new Side(side), new Side(side), new Side(side)]);
  this.side = side;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.contructor = Square;
Square.prototype.listProperties = function() {

}
