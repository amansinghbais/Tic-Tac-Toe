// DOM Constants and Variables
const boxes = document.querySelectorAll('.box');
const playerTurn = document.querySelector('#player-turn')
const game = document.querySelector('.game');
const btn = document.querySelector('.btn');

let playerFirstPlaying = true;
let playerWin = "";

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');

//Function to Update/Start Game
function updateGame(b){
    if(b.innerHTML === ""){
        if(playerFirstPlaying){
            b.innerHTML = 'X';
            playerFirstPlaying = false;
            playerTurn.innerHTML = `Player 'O' Turn`;
            b.disabled = true;
        }else{
            b.innerHTML = 'O';
            playerFirstPlaying = true;
            playerTurn.innerHTML = `Player 'X' Turn`;
        }
        let index = b.getAttribute('id')[1];
        checkWin();
    }
}

// Function to check if Someone Wins
function checkWin(){    
    if(b1.innerHTML === b2.innerHTML && b2.innerHTML === b3.innerHTML && b1.innerHTML !== ""){
        if(b1.innerHTML === 'X'){
            playerWin = 'X';
        }else if(b1.innerHTML === 'O'){
            playerWin = 'O';
        }
    }else if(b4.innerHTML === b5.innerHTML && b5.innerHTML === b6.innerHTML && b4.innerHTML !== ""){
        if(b4.innerHTML === 'X'){
            playerWin = 'X';
        }else if(b4.innerHTML === 'O'){
             playerWin ='O';
        }
    }else if(b7.innerHTML === b8.innerHTML && b7.innerHTML === b9.innerHTML && b7.innerHTML !== ""){
        if(b7.innerHTML === 'X'){
            playerWin = 'X';
        }else if(b7.innerHTML === 'O'){
            playerWin = 'O';   
        }    
    }else if(b1.innerHTML === b4.innerHTML && b1.innerHTML === b7.innerHTML && b1.innerHTML !== ""){
        if(b1.innerHTML === 'X'){
            playerWin = 'X';
        }else if(b1.innerHTML === 'O'){
            playerWin = 'O';
            
        }
    }else if(b2.innerHTML === b5.innerHTML && b2.innerHTML === b8.innerHTML && b2.innerHTML !== ""){
        if(b2.innerHTML === 'X'){
            playerWin = 'X';
        }else if(b2.innerHTML === 'O'){
            playerWin = 'O';        
        }
        
    }else if(b3.innerHTML === b6.innerHTML && b3.innerHTML === b9.innerHTML && b3.innerHTML !== ""){
        if(b3.innerHTML === 'X'){
            playerWin = 'X';
        }else if(b3.innerHTML === 'O'){
            playerWin = 'O';
        }
        
    }else if(b1.innerHTML === b5.innerHTML && b1.innerHTML === b9.innerHTML && b1.innerHTML !== ""){
        if(b1.innerHTML === 'X'){
            playerWin = 'X';
        }else if(b1.innerHTML === 'O'){
            playerWin = 'O';       
        }
    }else if(b3.innerHTML === b5.innerHTML && b5.innerHTML === b7.innerHTML && b3.innerHTML !== ""){
        if(b3.innerHTML === 'X'){
            playerWin = 'X';
        }else if(b3.innerHTML === 'O'){
            playerWin = 'O';   
        }
    }
    displayResult(playerWin);
}

// Function to display Result
function displayResult(pWin){
    if(pWin !== ""){
        setTimeout(()=>{

            if(pWin === 'X'){
                playerTurn.innerHTML = "Player 'X' Wins "; 
            }else if(pWin === 'O'){
                playerTurn.innerHTML = "Player 'O' Wins ";
            }
    
            playerTurn.classList.add('win');
            game.style.display = "none";
            setTimeout(()=>{
                btn.style.display = "flex";
            },500)
        },200)
    }
}

// Function to reset Game 
function resetGame(){
    btn.style.display = "none";
    playerTurn.classList.remove('win');
    game.style.display = "grid";
    playerTurn.innerHTML = `Player 'X' Turn`;
    boxes.forEach(box=>{
        box.innerHTML = "";
    });
    playerFirstPlaying = true;
    playerWin = "";
}

// Event Listeners
boxes.forEach(box =>{
    box.addEventListener('click',()=>{
        updateGame(box);
    });
});
btn.addEventListener('click',resetGame);