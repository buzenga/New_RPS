// variables
const preGame = document.querySelector(".pre_game");
const game = document.querySelector(".game");
const maleButton = document.querySelector(".male");
const femaleButton = document.querySelector(".female");
const startButton = document.querySelector(".start");
const playerAvatar = document.querySelector(".player");
const figureButtons = document.querySelectorAll(".fig");
const computerChosenDisplay = document.querySelector(
   ".chosen_figure_computer");
const playerChosenDisplay = document.querySelector(
   ".chosen_figure_player");
const roundDisplay = document.querySelector('.round_score');
const playerWon = document.querySelector(".player_won");
const computerWon = document.querySelector(".computer_won");
const announcement = document.querySelector(".score");
const restartGameButtons = document.querySelectorAll(".start_new");

// score variables
let playerScore = 0;
let computerScore = 0;
let computerFigure = '';
let playerFigure = '';
let round = 1;
let insideFunctionResult =[];

let scoreTimer = null;
let initializeDisplayTimer = null;

// button actions
startButton.addEventListener('click', () => {
 
   preGame.style.display = 'none';
   playerWon.style.display = 'none';
   computerWon.style.display = 'none';
   game.style.display = 'flex';
   gameStart();
})
window.addEventListener("load", () => {
   startButton.style.visibility = "hidden";
})

maleButton.addEventListener('click', () => {
   // playerAvatar.style.content = 'url(images/nobody.png)';
   playerAvatar.style.content = "url(images/male.png)";
   startButton.style.visibility = "visible";
})
femaleButton.addEventListener('click', () => {
   // playerAvatar.style.content = 'url(images/nobody.png)';
   playerAvatar.style.content = "url(images/female.png)";
   startButton.style.visibility = "visible";
})
restartGameButtons.forEach(button => button.addEventListener("click", () => {
   game.style.display = "none";
   playerWon.style.display = "none";
   computerWon.style.display = "none";
   preGame.style.display = "flex";
   startButton.style.visibility = "hidden";
   playerScore = 0;
   computerScore = 0;
   round = 1;
}))




// functions
// -------------------------------------------------------------
function gameStart () {
   playerScore = 0;
   computerScore = 0;
   round = 1;

   roundDisplay.innerHTML = `Round: ${round} <br/> Computer->  ${computerScore} : ${playerScore} <-You`;
   initializeDisplay();
   
      singleGame()

}
// ------------------------------------------------------
function singleGame(){
   let figureChoice = 0

   if (playerScore >= 5) {
      game.style.display = 'none';
      playerWon.style.display = 'flex';
      playerAvatar.style.content = 'url(images/nobody.png)';
      return;
   }
   if (computerScore >= 5) {
      game.style.display = 'none';
      computerWon.style.display = 'flex';
      playerAvatar.style.content = 'url(images/nobody.png)';
      return;
   }

   let insideFunction =figureButtons.forEach(figureButton => {
   figureButton.addEventListener('click', function handler (e) {
      figureButton.removeEventListener('click', handler);

         //protection from multiplying choices
            if (figureChoice > 0) return;
         //further loop

      clearScore();
      clearDisplay();
      playerFigure = e.target.id;
      setPlayerDisplay();
      computerFigure = randomComputerPick();
      getResult();
      // setTimeout(initializeDisplay,800);
      // setTimeout(clearScore,800);
         figureChoice++;
         
         // insideFunctionResult[0] = playerScore;
         // insideFunctionResult[1] = computerScore;
      singleGame();
         return;
      });

   }
   );
}

// ----------------------------------------------
function check () {
   console.log("punkty gracza: " + playerScore);
   console.log(insideFunctionResult)
}

// -----------------------------------------------------
function setPlayerDisplay () {
      if (playerFigure == 'rock') {
         playerChosenDisplay.style.content = "url(images/rock.png)";
         return;
      }
      if (playerFigure == 'paper') {
         playerChosenDisplay.style.content = "url(images/paper.png)";
         return;
      }
      if (playerFigure == 'scissors') {
         playerChosenDisplay.style.content = "url(images/scissors.png)";
         return;
      }
}
// --------------------------------------------------------
function getResult () {
   if ((playerFigure == "rock" && computerFigure == "scissors") ||
    (playerFigure == "paper" && computerFigure == "rock") ||
    (playerFigure == "scissors" && computerFigure =="paper")) {
// ?????????????????????????????????????????????????????????????????
      playerChosenDisplay.classList.remove("win", "lose");
      computerChosenDisplay.classList.remove("win", "lose"); 
// ??????????????????????????????????????????????????????????????????????????
      playerChosenDisplay.classList.add("win");
      computerChosenDisplay.classList.add("lose");

      // announcement.innerHTML = "You win!";
      announcement.innerHTML = `${randomWinnerText()}`;

      playerScore += 1;
      roundDisplay.innerHTML = `Round: ${round} <br/> Computer->  ${computerScore} : ${playerScore} <-You`;

   } else if ((computerFigure == "rock" && playerFigure == "scissors") ||
   (computerFigure == "paper" && playerFigure == "rock") ||
   (computerFigure == "scissors" && playerFigure =="paper")) {
// ???????????????????????????????????????????????????????????????????????????????
playerChosenDisplay.classList.remove("win", "lose");
computerChosenDisplay.classList.remove("win", "lose"); 
// ?????????????????????????????????????????????????????????????????????????????????

      computerChosenDisplay.classList.add("win");
      playerChosenDisplay.classList.add("lose");

      // announcement.innerHTML = "You lose!";
      announcement.innerHTML = `${randomLoserText()}`;

      computerScore += 1;
      roundDisplay.innerHTML = `Round: ${round} <br/> Computer->  ${computerScore} : ${playerScore} <-You`;

   } else {
      // ?????????????????????????????????????????????????????????????
      playerChosenDisplay.classList.remove("win", "lose");
      computerChosenDisplay.classList.remove("win", "lose"); 
      // ??????????????????????????????????????????????????????????????????????
      announcement.innerHTML = "It's a draw...";  
      roundDisplay.innerHTML = `Round: ${round} <br/> Computer->  ${computerScore} : ${playerScore} <-You`;
   }

}

 function randomComputerPick () {
   let randomNumber = Math.floor(Math.random() * 3) + 1;
   
   if (randomNumber == 1) {
      computerChosenDisplay.style.content =
      "url(images/rock.png)";
      return "rock";
   }
   if (randomNumber == 2) {
      computerChosenDisplay.style.content =
      "url(images/paper.png)";
      return "paper";
   }
   if (randomNumber == 3) {
      computerChosenDisplay.style.content =
      "url(images/scissors.png)";
      return "scissors";
   }
}
function initializeDisplay() {
      // startButton.style.visibility = "hidden";

   playerChosenDisplay.style.content = "none";
   computerChosenDisplay.style.content = "none";
   playerChosenDisplay.classList.remove("win", "lose");
   computerChosenDisplay.classList.remove("win", "lose");
   return;
}

function startScoreTimer () {
   scoreTimer = window.setTimeout(function() {
      announcement.innerHTML = "";
   }, 1000);
 }

function clearScore () {
   clearTimeout(scoreTimer);
   startScoreTimer();
}

function startinitializeDisplayTimer () {
   initializeDisplayTimer = window.setTimeout(function() {
      playerChosenDisplay.style.content = "none";
      computerChosenDisplay.style.content = "none";
      playerChosenDisplay.classList.remove("win", "lose");
      computerChosenDisplay.classList.remove("win", "lose"); 
   }, 1000)
}

function clearDisplay () {
   clearTimeout(initializeDisplayTimer);
   startinitializeDisplayTimer();
}


function randomWinnerText () {
   const arr = ["You did it", "Congratz!!!", "You win",];
   ranNum = Math.floor(Math.random() * 3);
   return arr[ranNum];
}
function randomLoserText () {
   const arr = ["That's a pitty", "You lose", "Too bad", ":("];
   ranNum = Math.floor(Math.random() * 4);
   return arr[ranNum];
}

