function buildHTML() {
  const wrap = document.createElement("div");
  const input = document.createElement("input");
  const image = document.createElement("img");
  const answer = document.createElement("p");

  wrap.classList.add("wrap");
  input.classList.add("input");
  image.classList.add("ball_image");
  answer.classList.add("answer");

  wrap.appendChild(input);
  wrap.appendChild(image);
  wrap.appendChild(answer);
  image.src = "./img/magic_ball.png";

  image.addEventListener("click", () => generateAnswer(answer));

  return wrap;
}

function generateAnswer(answerTag) {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber <= 4) {
    answerTag.textContent = "ТАК";
  } else {
    answerTag.textContent = "НІ";
  }
}

document.body.appendChild(buildHTML());
