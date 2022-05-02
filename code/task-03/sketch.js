function preload(){
  // preload assets
}



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#f78fb7');

  
  fill(0, 0, 0,)
  strokeWeight(0)
  arc(
    0, 200,
    300, 400,
    Math.PI / 180 * -90,
    Math.PI / 180 * 90,
    OPEN
  );

  arc(
    400, 200,
    300, 400,
    Math.PI / 180 * 90,
    Math.PI / 180 * -90,
    OPEN
  );
}