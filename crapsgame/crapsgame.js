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

// Craps Dice Roll Settings
const numDiceToRoll = 2;
const hideDiceDelay = 1000000;
const processDiceResultDelayMs = 1800;

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
const crapsBettingGridContainer = "crapsBettingGridContainer";
const crapsRoundFinishGridContainer = "crapsRoundFinishGridContainer";
const crapsRoundFinishMessage = "crapsRoundFinishMessage";
const crapsNextRoundDisabled = "crapsNextRoundDisabled";
const crapsNextRoundEnabled = "crapsNextRoundEnabled";

// In-game variables
let currentRounds = startingRound;
let currentMoney = startingMoney;
let currentBet = bets.even;
let currentBetAmount = minimumBet;
let canChangeBet = true;

function makeDreamComeTrue() {
  document.body.style.background = "url(../images/bg.png)";
  document.getElementById("title").style.visibility = "hidden";
}

// HTML Element Manipulation Function
function showElement(elementId) {
  document.getElementById(elementId).style.display = "block";
}

function hideElement(elementId) {
  document.getElementById(elementId).style.display = "none";
}

function showRegPane() {
  showElement(crapsRegPane);
}

function removeRegPane() {
  hideElement(crapsRegPane);
}

function showMainGameSection() {
  showElement(crapsMainSection);
}

function hideMainGameSection() {
  hideElement(crapsMainSection);
}

// Game Starting point
function regCrapsPlayer() {
  crapsUsername = document.getElementById(crapsusernameInput).value;

  // Username Validation Check
  let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g;
  if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
    alert(
      "Your username must be at least 5 characters long, alphanumeric only (a-z/A-Z/0-9), have no space and cannot start with a number",
    );
  } else {
    removeRegPane();
    showMainGameSection();
    setupFirstRound();
  }
}

// Round Managemnt Function
function setupFirstRound() {
  document.getElementById(crapsStatUsername).innerHTML = crapsUsername;
  hideElement(crapsNextRoundDisabled);
  showElement(crapsNextRoundEnabled);

  setMoney(startingMoney);
  setRounds(startingRound);
  betEven();
  setBetAmount(minimumBet);
  setupNextRound();
}

function setupNextRound() {
  showElement(crapsRollDiceButton);
  showElement(crapsBettingGridContainer);
  hideElement(crapsRoundFinishGridContainer);
  hideElement(crapsRollDiceAnimationContainer);
  canChangeBet = true;
  setBetAmount(minimumBet);
  // setBetAmount(currentBetAmount <= currentMoney ? currentBetAmount : minimumBet);
}

// User Score Setting
function setMoney(money) {
  document.getElementById(crapsStatMoney).innerHTML = money;
}

function setRounds(rounds) {
  document.getElementById(crapsStatRounds).innerHTML = rounds;
}

// Manage User Bet Selection
function betEven() {
  chooseBet(bets.even);
}

function betODD() {
  chooseBet(bets.odd);
}

function chooseBet(bet) {
  if (canChangeBet) {
    currentBet = bet;
    document.getElementById(bet).style.backgroundColor = "red";
    const deselectBet = bet == bets.even ? bets.odd : bets.even;
    document.getElementById(deselectBet).style.backgroundColor = "transparent";
  }
}

function increaseBet() {
  // currentMoney
  setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney));
}

function decreaseBet() {
  setBetAmount(Math.min(currentBetAmount - minimumBet, minimumBet));
}

function setBetAmount(betAmount) {
  if (canChangeBet) {
    currentBetAmount = betAmount;
    document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount;
  }
}

// Roll Dice and Process Result
function rollDice() {
  canChangeBet = false;
  formatDiceScale();
  hideElement(crapsRollDiceButton);
  showElement(crapsRollDiceAnimationContainer);
  const diceRollElement = document.getElementById(
    crapsRollDiceAnimationContainer,
  );

  rollADie({
    element: diceRollElement,
    numberOfDice: numDiceToRoll,
    callback: delayedProcessDiceResult,
    delay: hideDiceDelay,
  });
}

window.addEventListener("resize", formatDiceScale);

function formatDiceScale() {
  const vw = (window.innerWidth = 80);
  const vh = (window.innerHeight = 0.8);
  const widthScale = Math.min(700, vw, vh);
  const heightScale = widthScale * 0.714;
  const scale = heightScale / 494.6592;
  document.getElementById(crapsRollDiceAnimationContainer).style.transform =
    scale;
}

function delayedProcessDiceResult(diceResult) {
  setTimeout(function () {
    processDiceResult(diceResult);
  }, processDiceResultDelayMs);
}

function processDiceResult(diceResult) {
  const sum = diceResult.reduce((partialSum, a) => partialSum + a, 0);
  let diceSumResult = bets.even;
  if (sum % 2 === 1) {
    diceSumResult = bets.odd;
  }

  currentRounds = currentRounds + 1;
  setRounds(currentRounds);
  let roundFinishMessage = "";

  if (diceSumResult === currentBet) {
    roundFinishMessage = "YOU WIN";
    currentMoney = currentMoney + currentBetAmount;
    setMoney(currentMoney);
  } else {
    roundFinishMessage = "YOU LOSE";
    currentMoney = currentMoney - currentBetAmount;
    setMoney(currentMoney);
  }

  if (currentMoney === 0) {
    roundFinishMessage = "YOU'RE OUT";
    showElement(crapsNextRoundDisabled);
    hideElement(crapsNextRoundEnabled);
  }

  hideElement(crapsBettingGridContainer);
  showElement(crapsRoundFinishGridContainer);
  document.getElementById(crapsRoundFinishMessage).innerHTML =
    roundFinishMessage;
}

// Exit Game
function exitGame() {
  alert(
    "After playing " +
      currentRounds +
      " rounds, you leave with $" +
      currentMoney,
  );

  hideMainGameSection();
  showRegPane();
  document.getElementById(crapsusernameInput).value = "";
}
