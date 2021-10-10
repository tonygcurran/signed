var wigNumx = [];
var wigNumy = [];
var st;
var rot;
var grad2, galpha, balpha, ralpha, w;

function setup() {
  createCanvas(displayWidth, displayHeight);
  rot = 0;
   grad1 = createGraphics(displayWidth, displayHeight); 
  grad2 = createGraphics(displayWidth, displayHeight);
  galpha = random(100);
  balpha = random(150,255);
  ralpha = random(100);
     
   

  
    
  w = color(255);
  angleMode(DEGREES);
    st = random(100);
}

function draw() {
 // background(255,0,0);
  noStroke();
  if (rot <= 0 || rot >= 180){
    for (i = 0; i <10; i++){
       wigNumx[i] = random(displayWidth/3, displayWidth/3*2);
      wigNumy[i] = random(displayHeight/3, displayHeight/3*2);
        st = random(100);
        galpha = galpha+random(-1,1);
        balpha = balpha+random(-1,1);
ralpha = ralpha+random(-1,1);
      rot = 0;
  }
   }

  rectMode(CENTER);
 // fill(0,0,255);
  push();
  translate(displayWidth/2, displayHeight/2);
  rotate(rot);
  scale(2);
  //rect(0,0,displayWidth, displayHeight);
gradient2();
  pop();
  push()
    translate(-displayWidth/2, -displayHeight/2);
  scale(2);
  gradient1();
  pop();
    rot ++;
  print(rot);
}

function gradient1(){
  grad1.push();

    grad1.blendMode(BLEND);
    //grad1.strokeWeight(1);
 grad1.fill(balpha, balpha, 255);
grad1.rect(0,0,width, height);
grad1.blendMode(MULTIPLY);
    var g = color(galpha, 255, galpha);
for (var x = 0; x < width; x++) {
var interx = map(x, 0, width, 1, 0);
var g1 = lerpColor(g, w, interx);
grad1.stroke(g1);
grad1.line(x, 0, x, height);
}
  var r = color(255, ralpha, ralpha);
for (var y = 0; y < height; y++) {
var intery = map(y, 0, height, 1, 0);
var r1 = lerpColor(r, w, intery);
grad1.stroke(r1);
grad1.line(0, y, width, y);
}

grad1.blendMode(BLEND);
grad1.noFill();
grad1.strokeWeight(st);
grad1.erase();
grad1.beginShape();
    for (i = 0; i <10; i++){
grad1.curveVertex(wigNumx[i], wigNumy[i]);
    }
    
grad1.endShape();
  
 // grad1.noStroke();
grad1.noErase();
    imageMode(CENTER);
push();
  image(grad1,width/2, height/2);
  grad1.pop();
}

function gradient2(){

    grad2.blendMode(BLEND);

 grad2.fill(balpha, balpha, 255);
grad2.rect(0,0,width, height);
    grad2.blendMode(MULTIPLY);
    var g = color(galpha, 255, galpha);
for (var x = 0; x < width; x++) {
var interx = map(x, 0, width, 1, 0);
var g1 = lerpColor(g, w, interx);
grad2.stroke(g1);
grad2.line(x, 0, x, height);
}
  
  var r = color(255, ralpha, ralpha);
for (var y = 0; y < height; y++) {
var intery = map(y, 0, height, 1, 0);
var r1 = lerpColor(r, w, intery);
grad2.stroke(r1);
grad2.line(0, y, width, y);
}
  grad2.stroke(r1,0);
//noLoop();
noStroke();
    imageMode(CENTER);
  push();
//translate(width/2, height/2)
rotate(rot);
  imageMode(CENTER);
stroke(0,0);
   image(grad2,0, 0);
  pop();
}

function touchStarted() {
  let fs = fullscreen;
noCursor();
  fullscreen(fs);
setup();
}  


