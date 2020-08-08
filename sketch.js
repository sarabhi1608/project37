var database

var drawing = [];
var currentPath,title1,title2,title3,show,clearButton,erase , hi = 3;
var isDrawing = false;
var sprite = [];


function setup(){
  canvas = createCanvas(400,400);
  canvas.mousePressed(startPath);
  canvas.parent('canvascontainer');
  canvas.mouseReleased(endPath);


 
  clearButton = createButton('Remove Drawing');
  clearButton.position(165,420)
  clearButton.size(100,25);
  clearButton.mousePressed(RemoveDrawing)

  
  
 
  
 

}


function startPath(){
  isDrawing = true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath(){
  isdrawing  = false;
}
var rects = [];
function draw(){

   background("green");
 
  if (isDrawing){
    var point = {
      x: mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }

  fill("Red");

  strokeWeight(10);
  stroke("Red");
  noFill();
  for(var i = 0; i<drawing.length; i++){
     path = drawing[i];
    beginShape();
    for( j = 0; j<path.length; j++){
      vertex(path[j].x,path[j].y)

      
    }
    endShape();
  }  
  drawSprites();

}

function saveDrawing(){
 
  };


function gotData(data){

  

  var drawings = data.val();
  var keys = Object.keys(drawings);
  for (var i = 0; i< keys.length; i++ ){
    var key = keys[i];
    //console.log(key);
    var li = createElement('li', '');
    var ahref = createButton('#', key);  
    
    ahref.mousePressed(showDrawing);
    ahref.parent(li);     
    li.parent('drawinglist');
  }
}             

function errData(err) {
  console.log(err);
}

function showDrawing(){


  var ref = database.ref('/');
  ref.on('value', oneDrawing, errData);

  function oneDrawing(data){
    var dbdrawing = data.val();
    drawing = dbdrawing.drawing                                                                                                                  //.
  }
}

function RemoveDrawing(){
  drawing = [];
}

function era(){
  hi = 2
}