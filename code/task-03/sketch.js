const SketchWdidth = 400;
const SketchHeight = 400;


function preload(){
  // preload assets
}



function setup() {
  createCanvas(400, 400);

  background('#f78fb7');

  
  fill(0, 0, 0,)
  strokeWeight(0)
  arc(
    SketchWdidth - SketchHeight, SketchHeight / 2,
    SketchHeight * 0.75, SketchWdidth,
    Math.PI / 180 * -90,
    Math.PI / 180 * 90,
    OPEN
  );

  arc(
    SketchWdidth, SketchHeight / 2,
    SketchHeight * 0.75, SketchWdidth,
    Math.PI / 180 * 90,
    Math.PI / 180 * -90,
    OPEN
  );
}

function draw() {

  let DropWidth = SketchWdidth * 0.75
  let DropHeight = SketchHeight * 0.25

  // for ( DropWidth - SketchWidth * 0.25,let DropX = Math.random() * DropWidth)


}