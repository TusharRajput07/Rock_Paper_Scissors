let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  ties: 0,
  losses: 0,
};

updateScore();

//this function takes the paragraph element of html with specific class into the java script. And then then inner html is fed some string that shows the score(wins, ties, losses). The string shows previously updated scores. So, at different positions, this function is called, like when script starts its flow at the start of the game, when the score gets updated after result is out, and when the reset button is clicked. Basically, this function prints score in webpage.
function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}  Ties: ${score.ties}  Losses: ${score.losses}`;
}

function PickComputerMove() {
  const randomNo = Math.random();
  let computerMove = "";

  if (randomNo >= 0 && randomNo < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNo >= 1 / 3 && randomNo < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNo >= 2 / 3 && randomNo < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}

function RockPaperScissorsGame(PlayerMove) {
  const computerMove = PickComputerMove();

  let result = "";

  if (PlayerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie!";
    } else if (computerMove === "Paper") {
      result = "You lose!";
    } else if (computerMove === "Scissors") {
      result = "You win!";
    }
  } else if (PlayerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win!";
    } else if (computerMove === "Paper") {
      result = "Tie!";
    } else if (computerMove === "Scissors") {
      result = "You lose!";
    }
  } else if (PlayerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose!";
    } else if (computerMove === "Paper") {
      result = "You win!";
    } else if (computerMove === "Scissors") {
      result = "Tie!";
    }
  }

  if (result === "You win!") {
    score.wins = score.wins + 1;
  } else if (result === "You lose!") {
    score.losses = score.losses + 1;
  } else if (result === "Tie!") {
    score.ties = score.ties + 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  
  document.querySelector(".js-result").innerHTML = result;
  
  document.querySelector(
    ".js-moves"
    ).innerHTML = `You <img src="${PlayerMove.toLowerCase()}.png" class="moves-image" alt="${PlayerMove}">
    computer <img src="${computerMove.toLowerCase()}.png" class="moves-image" alt="${PlayerMove}">`;
    //`Your move: img - ${computerMove}.png :Computer move`;
    
    updateScore();
    
  console.log(score);
}
