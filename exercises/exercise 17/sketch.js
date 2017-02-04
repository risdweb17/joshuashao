// color variable
var c;
 
function setup() 
{
  createCanvas(windowWidth, windowHeight);
  c = color(255, 255, 255);
}
 
function draw() 
{
  background(c);
 
  fill(0);
  text('Press R, G, or B', 550, 350);	
  textSize(40)
}
 
function keyPressed()
{
  if(key == 'R' || key == 'r')
  {
    c = color(255, 0, 0);
  }
 
  if(key == 'G' || key == 'g')
  {
    c = color(0, 255, 0);
  }
  
  if(key == 'B' || key == 'b')
  {
    c = color(0, 0, 255);
  }
}