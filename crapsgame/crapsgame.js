// Craps Main Data
let crapsUsername = "";

// Game Settings
const startingMoney = 1000;
const startingRound = 0;

// HTML ELEMENT IDs
const crapsusernameInput = "craps-username-input";
const crapsRegPane = "craps-reg-pane";
const crapsMainSection = "craps-main-section";
const crapsStatUsername = "craps-stats-username";
const crapsStatMoney = "craps-stats-money";
const crapsStatRounds = "craps-stats-rounds";

// In-game variables
let currentRounds = startingRound
let currentMoney = startingMoney

function makeDreamComeTrue() {
  document.body.style.background = "url(../images/bg.png)";
  document.getElementById("title").style.visibility = "hidden";
}

function regCrapsPlayer() {
  crapsUsername = document.getElementById(crapsusernameInput).value;

  // Username Validation Check
  let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g;
  if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
    alert(
      "Your username must be at least 5 characters long, alphanumeric only (a-z/A-Z/0-9), have no space and cannot start with a number"
    );
  } else {
    removeRegPane();
    showMainGameSection();
    setupFirstRound();
  }
}

function removeRegPane() {
  document.getElementById(crapsRegPane).style.display = "none";
}

function showMainGameSection() {
  document.getElementById(crapsMainSection).style.display = "block";
}

function setupFirstRound() {
  document.getElementById(crapsStatUsername).innerHTML = crapsUsername;
  currentMoney = startingMoney
  currentRounds = startingRound
  setMoney(currentMoney);
  setRounds(currentRounds);
}

function setMoney(money) {
  document.getElementById(crapsStatMoney).innerHTML = money;
}

function setRounds(rounds) {
  document.getElementById(crapsStatRounds).innerHTML = rounds;
}
