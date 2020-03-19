let choices = ["rock", "paper", "scissors"]


function play(playerChoice) { //playerChoice is what I am calling the number being sent over from the onclick event on index.html
  console.log("this is my players choice", playerChoice);

  // player made a choice, this just displays it on the screen (html) under the element we id'd as playerChoice.
  document.getElementById("playerChoice").innerText = "You have chosen " + choices[playerChoice]

  //let's allow the computer to play too.
  let computerChoice = Math.floor(Math.random() * choices.length)
  console.log("this is the computers choice", computerChoice);

  // the computer made a choice, this just displays it on the screen (html) under the element we id'd as computerChoice.
  document.getElementById("computerChoice").innerText = "The computer has chosen " + choices[computerChoice]

  // Now let's find out who won
  if (playerChoice == 0 && computerChoice == 1 || playerChoice == 1 && computerChoice == 2 || playerChoice == 2 && computerChoice == 0) {
    document.getElementById("outcome").innerText = "You Lose"
  }
  if (playerChoice == 0 && computerChoice == 2 || playerChoice == 1 && computerChoice == 0 || playerChoice == 2 && computerChoice == 1) {
    document.getElementById("outcome").innerText = "You WIN!!!"
  }
  if (playerChoice == computerChoice) {
    document.getElementById("outcome").innerText = "It's a TIE"
  }
}

function playString(playerChoice) { //playerChoice is what I am calling the string being sent over from the onclick event on index.html
  console.log("this is my players choice", playerChoice);

  // player made a choice, this just displays it on the screen (html) under the element we id'd as playerChoice.
  document.getElementById("playerChoice").innerText = "You have chosen " + playerChoice

  //let's allow the computer to play too.
  let computerChoice = choices[Math.floor(Math.random() * choices.length)]
  console.log("this is the computers choice", computerChoice);

  // the computer made a choice, this just displays it on the screen (html) under the element we id'd as computerChoice.
  document.getElementById("computerChoice").innerText = "The computer has chosen " + computerChoice

  // Now let's find out who won
  if (playerChoice == 'rock' && computerChoice == 'paper' || playerChoice == 'paper' && computerChoice == 'scissors' || playerChoice == 'scissors' && computerChoice == 'rock') {
    document.getElementById("outcome").innerText = "You Lose"
  }
  if (playerChoice == 'rock' && computerChoice == 'scissors' || playerChoice == 'paper' && computerChoice == 'rock' || playerChoice == 'scissors' && computerChoice == 'paper') {
    document.getElementById("outcome").innerText = "You WIN!!!"
  }
  if (playerChoice == computerChoice) {
    document.getElementById("outcome").innerText = "It's a TIE"
  }
}