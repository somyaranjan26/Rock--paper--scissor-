let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice() {
  const choices = ['s', 'p', 'r'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "🧱";
  if (letter === "p") return "🧻";
  if (letter === "s") return "✂️";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "You".fontsize(3).sub();
  const smallCompWord = "Computer".fontsize(3).sub();
  const userScore_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} beats ${smallCompWord}${convertToWord(computerChoice)}. You Win! 🔥`;
  userScore_div.classList.add('green-glow');
  setTimeout(() => userScore_div.classList.remove('green-glow'), 500);
}


function lose(userChoice, computerChoice) {
  const smallUserWord = "You".fontsize(3).sub();
  const smallCompWord = "Computer".fontsize(3).sub();
  const userScore_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} loses ${smallCompWord}${convertToWord(computerChoice)}. You Lost! 💩`;
  userScore_div.classList.add('red-glow');
  setTimeout(() => userScore_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "You".fontsize(3).sub();
  const smallCompWord = "Computer".fontsize(3).sub();
  const userScore_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} eqauls ${smallCompWord}${convertToWord(computerChoice)}. It's a Draw, Try Again 😑`;
  userScore_div.classList.add('gray-glow');
  setTimeout(() => userScore_div.classList.remove('gray-glow'), 500);
}

function game(userChoice)  {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }

}



function main() {

  rock_div.addEventListener('click', () => game("r"));

  paper_div.addEventListener('click', () => game("p"));

  scissor_div.addEventListener('click', () => game("s"));

}


main();
