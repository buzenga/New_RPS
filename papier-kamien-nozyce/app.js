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

// button actions
startButton.addEventListener('click', () => {
 
   preGame.style.display = 'none';
   game.style.display = 'flex';
   fullGame();
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
   window.location.reload();
}))




functions
function fullGame(computerFigure,playerFigure) {
   playerScore = 0;
   computerScore = 0;
   computerFigure = '';
   playerFigure = '';

   startButton.style.visibility = "hidden";

   playerChosenDisplay.style.content = "none";
   computerChosenDisplay.style.content = "none";
   playerChosenDisplay.classList.remove("win", "lose");
   computerChosenDisplay.classList.remove("win", "lose");

   // let round = 1;

   roundDisplay.innerHTML = `Round: ${round} | Computer->  ${computerScore} : ${playerScore} <-You`;

   figureButtons.forEach(figureButton => figureButton.addEventListener('click', (e) => {
      playerFigure = e.target.id
      playerChosenDisplay.classList.remove("win", "lose");
      computerChosenDisplay.classList.remove("win", "lose");

      if (playerFigure == 'rock') {
         playerChosenDisplay.style.content = "url(images/rock.png)";
         round++;
      }
      if (playerFigure == 'paper') {
         playerChosenDisplay.style.content = "url(images/paper.png)";
         round++;
      }
      if (playerFigure == 'scissors') {
         playerChosenDisplay.style.content = "url(images/scissors.png)";
         round++;
      }
      computerFigure = randomComputerPick();

      if ((playerFigure == "rock" && computerFigure == "scissors") ||
      (playerFigure == "paper" && computerFigure == "rock") ||
      (playerFigure == "scissors" && computerFigure =="paper")) {

         playerChosenDisplay.classList.add("win");
         computerChosenDisplay.classList.add("lose");

         announcement.innerHTML = "You win!";

         playerScore += 1;

         roundDisplay.innerHTML = `Round: ${round} | Computer->  ${computerScore} : ${playerScore} <-You`;
      } else if ((computerFigure == "rock" && playerFigure == "scissors") ||
      (computerFigure == "paper" && playerFigure == "rock") ||
      (computerFigure == "scissors" && playerFigure =="paper")) {
        
         computerChosenDisplay.classList.add("win");
         playerChosenDisplay.classList.add("lose");

         announcement.innerHTML = "You lose!";

         computerScore += 1;

         roundDisplay.innerHTML = `Round: ${round} | Computer->  ${computerScore} : ${playerScore} <-You`;
      } else {

         announcement.innerHTML = "It's a draw...";
        
         roundDisplay.innerHTML = `Round: ${round} | Computer->  ${computerScore} : ${playerScore} <-You`;
      }
      console.log(computerScore)
      console.log(playerScore)
      // console.log('runda ' + round) tututuututututututututu


      if (playerScore == 5) {
         game.style.display = 'none';
         playerWon.style.display = 'flex';
         playerAvatar.style.content = 'url(images/nobody.png)';
         return;
      }
      if (computerScore == 5) {
         game.style.display = 'none';
         computerWon.style.display = 'flex';
         playerAvatar.style.content = 'url(images/nobody.png)';
         return;
      }
   }))


}
// function gameStart () {
//    // insideFunctionResult = []
   
   
//       singleGame()
   
//       //    if (playerScore == 5) {
//       //    game.style.display = 'none';
//       //    playerWon.style.display = 'flex';
//       //    playerAvatar.style.content = 'url(images/nobody.png)';
//       //    return;
//       // }
//       // if (computerScore == 5) {
//       //    game.style.display = 'none';
//       //    computerWon.style.display = 'flex';
//       //    playerAvatar.style.content = 'url(images/nobody.png)';
//       //    return;
//       // }

// }
// function singleGame(){
//    let figureChoice = 0

//    let insideFunction =figureButtons.forEach(figureButton => {
//    figureButton.addEventListener('click', function handler (e) {
//       figureButton.removeEventListener('click', handler);

//          //protection from multiplying choices
//             if (figureChoice > 0) return;
//          //further loop
//       initializeDisplay();
//       playerFigure = e.target.id;
//       setPlayerDisplay();
//       computerFigure = randomComputerPick();
//       getResult();
//          figureChoice++;
         
//          insideFunctionResult[0] = playerScore;
//          insideFunctionResult[1] = computerScore;

//          return;
//       });

//    }
//    );
// }

// ----------------------------------------------
function check () {
   // insideFunctionResult[0] = "cos";
   // insideFunctionResult[1] = 'cos innego';
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
      playerChosenDisplay.classList.add("win");
      computerChosenDisplay.classList.add("lose");
      announcement.innerHTML = "You win!";
      playerScore += 1;
      roundDisplay.innerHTML = `Round: ${round} | Computer->  ${computerScore} : ${playerScore} <-You`;

   } else if ((computerFigure == "rock" && playerFigure == "scissors") ||
   (computerFigure == "paper" && playerFigure == "rock") ||
   (computerFigure == "scissors" && playerFigure =="paper")) {
      computerChosenDisplay.classList.add("win");
      playerChosenDisplay.classList.add("lose");
      announcement.innerHTML = "You lose!";
      computerScore += 1;
      roundDisplay.innerHTML = `Round: ${round} | Computer->  ${computerScore} : ${playerScore} <-You`;

   } else {
      announcement.innerHTML = "It's a draw...";  
      roundDisplay.innerHTML = `Round: ${round} | Computer->  ${computerScore} : ${playerScore} <-You`;
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


