Cards = {
  1: {
    image: "six",
    value: 6,
  },
  2: {
    image: "seven",
    value: 7,
  },
  3: {
    image: "eight",
    value: 8,
  },
  4: {
    image: "nine",
    value: 9,
  },
  5: {
    image: "ten",
    value: 10,
  },
  6: {
    image: "Jack",
    value: 2,
  },
  7: {
    image: "Queen",
    value: 3,
  },
  8: {
    image: "King",
    value: 4,
  },
  9: {
    image: "Ace",
    value: 11,
  },
};

const resetButton = document.getElementById("resetButton");
const resultsContainer = document.getElementById("resultsContainer");
const resultsElement = document.getElementById("results");

const userNameElement = document.getElementById("userName");
const userScoreElement = document.getElementById("userScore");
const userCardImageElement = document.getElementById("userCardImage");
const userCardValueElement = document.getElementById("userCardValue");

const computerScoreElement = document.getElementById("computerScore");
const computerCardImageElement = document.getElementById("computerCardImage");
const computerCardValueElement = document.getElementById("computerCardValue");

const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => generateNumber());
resetButton.addEventListener("click", () => resetGame());

const userName = prompt("Введіть ім'я гравця", "User");
userNameElement.textContent = userName;

let userScore = 0;
let computerScore = 0;

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function generateNumber() {
  const userNumber = randomInteger(1, 9);
  const computerNumber = randomInteger(1, 9);

  displayCards(userNumber, computerNumber);
}

function displayCards(userNumber, computerNumber) {
  const userCardImage = Cards[userNumber].image;
  const userCardValue = Cards[userNumber].value;

  const computerCardImage = Cards[computerNumber].image;
  const computerCardValue = Cards[computerNumber].value;

  userCardImageElement.src = `./img/${userCardImage}.png`;
  userCardValueElement.textContent = userCardValue;

  computerCardImageElement.src = `./img/${computerCardImage}.png`;
  computerCardValueElement.textContent = computerCardValue;

  if (userCardValue > computerCardValue) {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (userCardValue < computerCardValue) {
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

function resetGame() {
  userScore = 0;
  computerScore = 0;

  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;

  userCardImageElement.src = "./img/white.png";
  computerCardImageElement.src = "./img/white.png";

  userCardValueElement.textContent = 0;
  computerCardValueElement.textContent = 0;

  generateButton.disabled = false;
  resultsContainer.classList.remove("active");
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
