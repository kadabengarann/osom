const buttons = document.querySelectorAll('.pick');
const myScoreEl = document.getElementById('number');
const computerScoreEl = document.getElementById('computer_score');
const choices = ['paper', 'scissors', 'rock'];
const main = document.getElementById('select');
const result = document.getElementById('result');
const resetBtn = document.getElementById('reset');
const message_container = document.getElementById('message-container');
const message = document.getElementById('message');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');

let myScore = 0;
let userChoice = undefined;

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
    userChoice = button.getAttribute('data-choice');
    main.style.display = 'none';
    result.style.display = 'flex';
    checkWinner();
  })
});

function checkWinner(){

    const computerChoice = pickRandomChoice();

    updateSelection(user_select, userChoice);

    setTimeout(function(){
        updateSelection(computer_select, computerChoice);
        message_container.style.display = 'flex';
        if (userChoice === computerChoice){
        //Draw
        message.innerText= "DRAW";
        }else if(userChoice === 'paper' && computerChoice==='rock'
        || userChoice === 'rock' && computerChoice === 'scissors'
        || userChoice === 'scissors' && computerChoice === 'paper'){
        //User won
        myScoreUpdate();
        message.innerText= "YOU WIN";
        }else{
        //Computer won
        message.innerText= "YOU LOST";
        }
      }, 1500);
}

resetBtn.addEventListener('click',()=>{
    main.style.display = 'flex';
    result.style.display = 'none';
    message_container.style.display = 'none';
    updateSelection(computer_select, 'blank');
  });
  
function myScoreUpdate(){
  myScore++;
  myScoreEl.innerText = myScore;
}

function pickRandomChoice(){
  return choices[Math.floor(Math.random()*choices.length)];
}

function updateSelection(selectionEl, choice){
  selectionEl.src='./images/'+choice+'.png';
  selectionEl.alt = choice;
}