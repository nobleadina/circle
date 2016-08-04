function circle(x, y, diameter) {
  ellipse(x,y,diameter,diameter)
}


function setup (){
  createCanvas(640,1000);
  background(100,50,150);

  
}


function draw() {
  fill(20,180,40,255);
  circle(100,90,150)
  fill(90,100,0);
  circle(100,90,100);
  fill(120,250,90);
  circle(100,90,50);
}