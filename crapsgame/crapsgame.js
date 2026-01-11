// Craps Main Data
let crapsUsername = "";

// Game Settings
const startingMoney = 1000;
const startingRound = 0;
const bets = {
  even: "EVEN",
  odd: "ODD",
};

const minimumBet = 100;

// HTML ELEMENT IDs
const crapsusernameInput = "craps-username-input";
const crapsRegPane = "craps-reg-pane";
const crapsMainSection = "craps-main-section";
const crapsStatUsername = "craps-stats-username";
const crapsStatMoney = "craps-stats-money";
const crapsStatRounds = "craps-stats-rounds";
const crapsUserBetAmount = "crapsUserBetAmount";
const crapsRollDiceButton = "crapsRollDiceButton";
const crapsRollDiceAnimationContainer = "crapsRollDiceAnimationContainer";

// In-game variables
let currentRounds = startingRound;
let currentMoney = startingMoney;
let currentBet = bets.even;
let currentBetAmount = minimumBet;

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
  currentMoney = startingMoney;
  currentRounds = startingRound;
  setMoney(currentMoney);
  setRounds(currentRounds);
  betEven();
  setBetAmount(minimumBet);
}

function setMoney(money) {
  document.getElementById(crapsStatMoney).innerHTML = money;
}

function setRounds(rounds) {
  document.getElementById(crapsStatRounds).innerHTML = rounds;
}

function betEven() {
  chooseBet(bets.even);
}

function betODD() {
  chooseBet(bets.odd);
}

function chooseBet(bet) {
  currentBet = bet;
  document.getElementById(bet).style.backgroundColor = "red";
  const deselectBet = bet == bets.even ? bets.odd : bets.even;
  document.getElementById(deselectBet).style.backgroundColor = "transparent";
}

function increaseBet() {
  // currentMoney
  setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney));
}

function decreaseBet() {
  setBetAmount(Math.min(currentBetAmount - minimumBet, minimumBet));
}

function setBetAmount(betAmount) {
  currentBetAmount = betAmount;
  document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount;
}

function rollDice() {
  formatDiceScale();
  document.getElementById(crapsRollDiceButton).style.display = "none";
  const diceRollElement = document.getElementById(
    crapsRollDiceAnimationContainer
  );

  rollADie({
    element: diceRollElement,
    numberOfDice: 2,
    callback: processDiceResult,
    delay: 1000000,
  });
}

window.addEventListener("resize", formatDiceScale)

function formatDiceScale() {
  const vw = window.innerWidth = 80
  const vh = window.innerHeight = 0.8
  const widthScale = Math.min(700, vw, vh)
  const heightScale = widthScale * 0.714
  const scale = heightScale / 494.6592
  document.getElementById(crapsRollDiceAnimationContainer).style.transform = "scale(" + scale + ")";
}

function processDiceResult(diceResult) {
  console.log(diceResult);
}
