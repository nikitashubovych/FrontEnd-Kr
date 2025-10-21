const playBtn = document.getElementById("generateButton");

const userNameEl = document.getElementById("userName");
const userAttemptsEl = document.getElementById("userAttempts");

const userName = prompt("Введіть ім'я користувача", "Мамонт");
userNameEl.textContent = `Ви авторизувались як ${userName}`;

let attempts = 5;
userAttemptsEl.textContent = `Залишилось ${attempts} фріспінів`;

const columns = [[], [], []];
const cells = document.querySelectorAll(".cell");

//========ДОПОМІЖНІ ФУНКЦІЇ========
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function updateAttempts(number) {
  attempts += number;
  userAttemptsEl.textContent = `Залишилось ${attempts} фріспінів`;
}

function setButtonDisabled(isDisabled) {
  playBtn.disabled = isDisabled;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

////========ОСНОВНІ ФУНКЦІЇ========
async function fillTheArray() {
  updateAttempts(-1);

  setButtonDisabled(true);

  for (let i = 0; i < 3; i++) {
    columns[i] = [];
    while (columns[i].length < 3) {
      let number = randomInteger(1, 5);

      if (columns[i].includes(number)) {
        continue;
      }

      columns[i].push(number);
    }
  }

  await fillTheNodes();
  checkVinner();
  setButtonDisabled(false);
}

async function fillTheNodes() {
  for (let i = 0; i < 9; i++) {
    cells[i].textContent = "";
  }

  for (let col = 0; col < 3; col++) {
    for (let row = 0; row < 3; row++) {
      const cellIndex = col + row * 3;

      cells[
        cellIndex
      ].innerHTML = `<img src="./img/${columns[col][row]}.png" />`;

      await delay(100);
    }
  }
}

function checkVinner() {
  for (let i = 0; i < 3; i++) {
    if (columns[0][i] == columns[1][i] && columns[1][i] == columns[2][i]) {
      updateAttempts(2);
    }
  }
}

function play() {
  if (attempts <= 0) {
    alert("Ви програли!!!");
  } else {
    fillTheArray();
  }
}

playBtn.addEventListener("click", () => play());
