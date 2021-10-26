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
    return 0;
  } else if (
    (userSelection === "rock" && computerSelection === "scissor") ||
    (userSelection === "scissor" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    return 1;
  } else if (
    (userSelection === "rock" && computerSelection === "rock") ||
    (userSelection === "scissor" && computerSelection === "scissor") ||
    (userSelection === "paper" && computerSelection === "paper")
  ) {
    return 2;
  } else return `invalid option`;
}

function final(noOfTimes) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < noOfTimes; i++) {
    let user = userPlay();
    let comp = computerPlay();
    if (game(user, comp) === 0) {
      a = a + 1;
    } else if (game(user, comp) === 1) {
      b = b + 1;
    } else if (game(user, comp) === 2) {
      a = a + 1;

      b = b + 1;
    } else return "wrong input";
  }
  console.log("final" + a);
  console.log("fianl" + b);
}
console.log(final(5));
