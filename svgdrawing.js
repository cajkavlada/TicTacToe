  // drawing of a line
  function drawLine(x1,y1,x2,y2,color){
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('style', 'stroke-width:4; stroke: '+color)
    document.getElementById('board').appendChild(line);
  }

  // drawing of a circle
  function drawCircle(x,y){
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', CELL_SIZE/5);
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('style', 'stroke-width:4; stroke: red; fill:white;');
    document.getElementById('board').appendChild(circle);
  }