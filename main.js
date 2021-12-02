// Switch color button
switchColorThemeBtn.addEventListener("click", () => {
  if (document.body.style.background === "white") {
    document.body.style.background = "black";
    document.body.style.color = "limegreen";
    switchColorThemeBtn.innerHTML = `Light Mode`;
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
    switchColorThemeBtn.innerHTML = `Dark Mode`;
  }
});
let score = 0;
submitScoreBtn.addEventListener("click", () => {
  let score = 0;
  if (document.getElementById("question1Alt1").checked) {
    score++;
  }
  if (document.getElementById("question2Alt2").checked) {
    score++;
  }
  if (document.getElementById("question3Alt1").checked) {
    score++;
  }
  if (document.getElementById("question4Alt2").checked) {
    score++;
  }
  if (document.getElementById("question5Alt3").checked) {
    score++;
  }
  if (document.getElementById("question6Alt2").checked) {
    score++;
  }
  if (
    document.getElementById("question7Alt1").checked === true &&
    document.getElementById("question7Alt2").checked === true &&
    document.getElementById("question7Alt3").checked === false &&
    document.getElementById("question7Alt4").checked === false
  ) {
    score++;
  }
  let finalResult = document.createElement("p");
  finalResult.textContent = `Du har svarat rätt på ${score} av 7 frågor!`;
  resultDiv.appendChild(finalResult);
  if (score === 7) {
    finalResult.style.color = "green";
  } else if (score > 4) {
    finalResult.style.color = "orange";
  } else {
    finalResult.style.color = "red";
  }
  submitScoreBtn.remove();
});
