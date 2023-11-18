let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
const boardElement = document.querySelectorAll(".square")

const text1Cons = document.querySelector("h6");
let playerTurn = false;

function updateBoard(){
    for(let i = 0; i < board.length; i++)
    {
        boardElement[i].innerHTML=board[i];
    }
    let num =0;
    if(playerTurn==false) num=1; else num =2;
    text1Cons.innerHTML="Player Turn: "+ num;
}
updateBoard();
for(let i = 0; i < board.length; i++){
    boardElement[i].addEventListener("click", function(){
        playTurn(this.id);
    })
}


function playTurn(id){
    console.log(id);
    if(board[id-1] == " "){
        if(!playerTurn){
            board[id-1]= "X"
        } else {
            board[id-1]= "O"
        } 
        CheckWin();
        playerTurn = !playerTurn;
        updateBoard();
    }
} 

function  CheckWin(){
    var win = false; 
    win= horizontalWin()?true:win;
    win= verticalWin()?true:win;
    win= diagonalWin()?true:win;
    if(win == true){
        displayWin();
    }
}

function horizontalWin(){
    for(let i = 0; i < 3; i++){
        if(board[i * 3] == board[i * 3 + 1] && board[i * 3 + 1] == board[i * 3 + 2] && board[i * 3] != " "){
            return true;
        }
    }
    
}

function verticalWin(){
       for(let i = 0; i < 3; i++){
        if(board[i] == board[i + 3] && board[i + 3] == board[i + 6] && board[i] != " "){
            return true;
        }
    } 
}

function diagonalWin(){
    if(board[0] == board[4] && board[4] == board[8] && board[0] != " "){
        return true;
    }
    if(board[2] == board[4] && board[4] == board[6] && board[2] != " "){
        return true;
    }
}

function displayWin(){
    let element = document.getElementById("win");
    element.innerHTML = playerTurn? "Player 2 Wins!" : "Player 1 Wins!";
}

function reset(){
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    playerTurn = false;
    document.getElementById("win").innerHTML="";
    updateBoard();
}

//monke balls