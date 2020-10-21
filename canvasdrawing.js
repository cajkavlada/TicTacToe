  // drawing of a line
  function drawLine(x1,y1,x2,y2,color){
    var c = document.getElementById('board');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;  
    ctx.stroke();
  }

  // drawing of a circle
  function drawCircle(x,y){
    var c = document.getElementById('board');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.arc(x,y,CELL_SIZE/5,0,2*Math.PI);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 4;  
    ctx.stroke();
  }