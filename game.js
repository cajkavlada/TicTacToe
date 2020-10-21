const CELL_SIZE = 100;

let player = 1; //number of the player on the move
let gameOver = false;
let board = [[0,0,0],[0,0,0],[0,0,0]]; //array representation of board
  
  window.onload = init;

  function init() {
    let board = document.getElementById('board');
    board.setAttribute("width", CELL_SIZE*3);
    board.setAttribute("height", CELL_SIZE*3);

    drawBoard();
    
    board.addEventListener('click', event => {
      //compute coordinates of the cell that was clicked
      const offsetLeft = (window.innerWidth-3*CELL_SIZE)/2;
      const offsetTop = document.getElementById('game').offsetTop;
      const row= Math.floor((event.pageY-offsetTop) / CELL_SIZE);
      const column = Math.floor((event.pageX-offsetLeft) / CELL_SIZE);      
      clickedOn(row, column);
    });
  }

  function drawBoard(){
    drawLine(CELL_SIZE,0,CELL_SIZE,CELL_SIZE*3,'gray');
    drawLine(CELL_SIZE*2,0,CELL_SIZE*2,CELL_SIZE*3,'gray');
    drawLine(0,CELL_SIZE,CELL_SIZE*3,CELL_SIZE,'gray');
    drawLine(0,CELL_SIZE*2,CELL_SIZE*3,CELL_SIZE*2,'gray');
  }

  function clickedOn(row, column) {
    // check if clicked cell is empty and game is not over
    if (board[row][column] == 0 && !gameOver) {      

      drawSymbol(row,column);
      board[row][column] = player;
      
      let state = document.getElementById('state');
      // check for win
      if (playerHasWon(row,column)) {
        gameOver = true;
        state.innerHTML = 'Hráč ' + player + ' vyhrál!';
        state.className = 'player' + player;      
      // check for tie
      } else if (boardFilled()) {
        gameOver = true;
        state.innerHTML = 'Remíza!';
      } else {
        player = player % 2 + 1;
        state.innerHTML = 'Tah hráče ' + player;
      }
    } 
  }

  // check for three same symbols in line
  function playerHasWon(row, column) {    
    if (hasSameSymbol(board[row][0],board[row][1],board[row][2]) || // check row
        hasSameSymbol(board[0][column],board[1][column],board[2][column]) || // check column
        (row==column && hasSameSymbol(board[0][0],board[1][1],board[2][2])) || // check one diagonal
        (row+column==2 && hasSameSymbol(board[0][2],board[1][1],board[2][0]))) { // check the second diagonal
      return true;
    }else{
      return false;
    }
  }

  function hasSameSymbol(x,y,z){
    return x==y && y==z;
  }

  //check if board is filled
  function boardFilled(){
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if(board[i][j]==0){
          return false;
        }
      }
    }
    return true;
  }

  function drawSymbol(row, column) {
    //compute coordinates of a center of clicked cell
    const x = column*CELL_SIZE + CELL_SIZE / 2;
    const y = row*CELL_SIZE + CELL_SIZE / 2;

    if (player == 1) {
      drawCross(x,y);
    } else {
      drawCircle(x,y);
    }
  }
 
  // drawing of cross from two lines
  function drawCross(x,y){
    const size = CELL_SIZE/5;
    drawLine(x-size, y-size, x+size, y+size,'blue');
    drawLine(x-size, y+size, x+size, y-size,'blue');
  }