const resetButton = document.getElementById("resetButton");
const resultsContainer = document.getElementById("resultsContainer");
const resultsElement = document.getElementById("results");

const userNameElement = document.getElementById("userName");
const userScoreElement = document.getElementById("userScore");
const userNumberElement = document.getElementById("userNumber");

const computerScoreElement = document.getElementById("computerScore");
const computerNumberElement = document.getElementById("computerNumber");

const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => generateNumber());
resetButton.addEventListener("click", () => resetGame());

const userName = prompt("Введіть ім'я гравця", "User");
userNameElement.textContent = userName;

let userScore = 0;
let computerScore = 0;

function generateNumber() {
  const userNumber = Math.floor(Math.random() * 10);
  const computerNumber = Math.floor(Math.random() * 10);

  displayNumber(userNumber, computerNumber);
}

function resetGame() {
  userScore = 0;
  computerScore = 0;

  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;

  userNumberElement.textContent = 0;
  computerNumberElement.textContent = 0;

  generateButton.disabled = false;
  resultsContainer.classList.remove("active");
}

function displayNumber(userNumber, computerNumber) {
  userNumberElement.textContent = userNumber;
  computerNumberElement.textContent = computerNumber;

  if (userNumber > computerNumber) {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (userNumber < computerNumber) {
    computerScore++;
    computerScoreElement.textContent = computerScore;
  } else {
    userScore++;
    computerScore++;
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
  }
  checkScore();
}

function checkScore() {
  if (userScore == 3 && computerScore == 3) {
    resultsContainer.classList.add("active");
    resultsElement.textContent = "Нічия";
    generateButton.disabled = true;
  } else if (userScore == 3) {
    resultsContainer.classList.add("active");
    resultsElement.textContent = `Переміг ${userName}`;
    generateButton.disabled = true;
  } else if (computerScore == 3) {
    resultsContainer.classList.add("active");
    resultsElement.textContent = "Переміг комп'ютер";
    generateButton.disabled = true;
  }
}
