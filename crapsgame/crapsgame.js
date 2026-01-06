// HTML ELEMENT IDs

const crapsusernameInput = "craps-username-input";
const crapsRegPane = "craps-reg-pane";
const crapsMainSection = "craps-main-section";

function makeDreamComeTrue() {
  document.body.style.background = "url(../images/bg.png)";
  document.getElementById("title").style.visibility = "hidden";
}

function regCrapsPlayer() {
  let crapsUsername = alert(
    document.getElementById(crapsusernameInput).value
  );
  removeRegPane();
  showMainGameSection();
}

function removeRegPane() {
  document.getElementById(crapsRegPane).style.display = "none";
}

function showMainGameSection() {
  document.getElementById(crapsMainSection).style.display = "block";
}
