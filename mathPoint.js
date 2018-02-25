
function MathPoint(x, y, value) {
    this.position = createVector(x, y);
    this.value = value;
}

MathPoint.prototype.position = function() {
  return this.position;
}

MathPoint.prototype.value = function() {
  return this.value;
}
