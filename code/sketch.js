
let multiplyerSlider;
let pointsSlider;
let modularSlider;

let mulSliderText;
let pointSliderText;
let modSliderText;

function setup() {

  createCanvas(windowWidth, windowHeight);
  multiplyerSlider = createSlider(1,100,2);
  multiplyerSlider.position(20, 20);

  pointsSlider = createSlider(1, 100, 100);
  pointsSlider.position(20,60);

  modularSlider = createSlider(1,100, 100);
  modularSlider.position(20, 100);

  textSize(25);
}

function draw() {

  background(51);

  //Draw points around a circle
  fill(102, 0, 102);
  stroke(255,255,255);
  createModCircle(pointsSlider.value(), multiplyerSlider.value());

  //text for sliders
  fill(255);
  text("Multiplyer: " + multiplyerSlider.value(), multiplyerSlider.x * 2 +
  multiplyerSlider.width, multiplyerSlider.y + 20);

  text("# Points: " + pointsSlider.value(), pointsSlider.x * 2 + pointsSlider.width,
  pointsSlider.y + 20);

  text("Mod: " + modularSlider.value(), modularSlider.x * 2 + modularSlider.width,
  modularSlider.y + 20);
}

function createModCircle(numOfPoints, multiplyer) {


  let points = [];
  let radius = 20;
  let distanceFromCenter = 400;

  ellipseMode(CENTER);

  //Center in middle of screen
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(-PI/2);

  //Draw points
  for (let i = 0; i < numOfPoints; i++) {

    //Calculate position for points
    let angle = map(i, 0, numOfPoints, 0, TWO_PI);
    let x =  distanceFromCenter * cos(angle);
    let y = distanceFromCenter * sin(angle);

    //Draw point
    let point = new MathPoint(x, y, i);
    points.push(point);

    ellipse(point.position.x, point.position.y, radius);
  }
  drawLines(points, multiplyerSlider.value());
  pop();
}

function drawLines(thePoints, multiplyer) {

  //For each point do the math.
  for (let i = 0; i < thePoints.length; i++) {

    //Get values and modular product
    let firstValue = thePoints[i].value;
    let product = (firstValue * multiplyer) % modularSlider.value();
    let endPoint;

    //Try and connect points 
    try {
      endPoint = thePoints[product];
      line(thePoints[i].position.x, thePoints[i].position.y, endPoint.position.x, endPoint.position.y);
    } catch(e) {
      print("Can't find point");
    }

  }
}
