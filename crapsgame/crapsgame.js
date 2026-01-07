// HTML ELEMENT IDs

const crapsusernameInput = "craps-username-input";
const crapsRegPane = "craps-reg-pane";
const crapsMainSection = "craps-main-section";

function makeDreamComeTrue() {
  document.body.style.background = "url(../images/bg.png)";
  document.getElementById("title").style.visibility = "hidden";
}

function regCrapsPlayer() {
  let crapsUsername = document.getElementById(crapsusernameInput).value

  // Username Validation Check
  let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
  if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
    alert(
      "Your username must be at least 5 characters long, alphanumeric only (a-z/A-Z/0-9), have no space and cannot start with a number"
    );
  } else {
    removeRegPane();
    showMainGameSection();
  }
}

function removeRegPane() {
  document.getElementById(crapsRegPane).style.display = "none";
}

function showMainGameSection() {
  document.getElementById(crapsMainSection).style.display = "block";
}
