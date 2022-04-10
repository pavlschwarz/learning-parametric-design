function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);  
}

function draw() {
  background('#3586f0');
  strokeWeight(0);
 //Yello Ellipse//
 fill('#fcd538');
 ellipse(150, 200, 300, 400);
//Blue Ellipse//
  fill('#3586f0')
 ellipse(200, 200, 300, 400);
//Grey Ellipse//
 fill('#243140');
 ellipse(250, 200, 300, 400);


 strokeWeight(0);

 fill('#243140');
 circle(20, 20, 5);

 fill('#243140');
 circle(30, 30, 10);

 fill('#fcd538');
 circle(400 - 20, 400 - 20, 5);

 fill('#fcd538');
 circle(400 - 30, 400- 30, 10);

 strokeWeight(2.5);
 stroke('#243140');
 line(0, 400, 400, 0)

 strokeWeight(0);
 fill('#3586f0');
 ellipse(225, 200, 250, 300);

 fill('#fcd538');
 ellipse(200, 200, 200, 200);

 fill('#3586f0');
 ellipse(200, 200, 50, 25);
}