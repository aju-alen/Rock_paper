// function that generates random string
function computerPlay() {
  let arr = ["rock", "paper", "scissor"];
  let randomVariable = Math.floor(Math.random() * arr.length);
  let computer = arr[randomVariable];
  return computer;
}
function userPlay() {
  let arr = ["rock", "paper", "scissor"];
  let randomVariable = Math.floor(Math.random() * arr.length);
  let user = arr[randomVariable];
  return user;
}

// function that plays the game one time
function game(userSelection, computerSelection) {
  // userSelection = prompt("enter your selection").toLowerCase();

  if (
    (userSelection === "rock" && computerSelection === "paper") ||
    (userSelection === "scissor" && computerSelection === "rock") ||
    (userSelection === "paper" && computerSelection === "scissor")
  ) {
    return 1;
    // return `${computerSelection} beats ${userSelection}, you loose! `;
  } else if (
    (userSelection === "rock" && computerSelection === "scissor") ||
    (userSelection === "scissor" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    return 1;
    // return `${userSelection} beats ${computerSelection}, you win! `;
  } else if (
    (userSelection === "rock" && computerSelection === "rock") ||
    (userSelection === "scissor" && computerSelection === "scissor") ||
    (userSelection === "paper" && computerSelection === "paper")
  ) {
    return 0;
    // return `its a draw! `;
  } else return `invalid option`;
}
// console.log(game(userPlay(), computerPlay()));

// let result = game("rock");
// console.log(game("rocK".toLowerCase(), computerPlay()));
function final(noOfTimes) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < noOfTimes; i++) {
    if (game(userPlay(), computerPlay()) === 1) {
      a = a + 1;
    } else if (game(userPlay(), computerPlay()) === 2) {
      b = b + 1;
    } else if (game(userPlay(), computerPlay()) === 0) {
      a = a + 1;
      b = b + 1;
    }
  }
  console.log(a);
  console.log(b);
}
console.log(final(5));
