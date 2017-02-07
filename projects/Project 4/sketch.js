var theta = 0;
var count = 0;
var array = [];

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  
  for(var i = 1; i < 7; i++){
    var img = loadImage('consume_' + i + ".jpg");
    array.push(img);
  }
  
}

function draw() {
  
  console.log(count);
  background(255)
  push();
    rotateZ(theta  *0.1);
    rotateX(theta  *0.1);
    rotateY(theta  *0.1);
    texture(array[count]);
    box(2000, 2000, 2000);
  pop();
  theta += 0.05;
  
  
}


function mousePressed(){
  if(count < array.length - 1){
    count++;  
  }
  else if(count == array.length - 1){
    count = 0;
  }
}