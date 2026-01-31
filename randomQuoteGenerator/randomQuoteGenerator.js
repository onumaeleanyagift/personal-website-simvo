// HTML ELEMENTS
const randomQuoteText = "randomQuoteText";
const randomQuoteAuthor = "randomQuoteAuthor";

const colors = [
  ["#FF8080", "#FFCF96"],
  ["#FFF3DA", "#D0BFFF"],
  ["#8DDFCB", "#82A0D8"],
  ["#F9B572", "#99B080"],
  ["#7C96AB", "#BFCCB5"],
  ["#B7B7B7", "#EDC6B1"],
  ["#FFDEB4", "#FFB4B4"],
  ["#FFAACF", "#B9F3E4"],
  ["#B5F1CC", "#E5FDD1"],
  ["#F7ECDE", "#54BAB9"],
  ["#7897AB", "#D885A3"],
  ["#B97A95", "#F6AE99"]
];

function getRandomColorCombo() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors(randomIndex);
}

function getNewRandomQuote() {
  console.log("Function called");
  fetch("https://api.quotable.io/quote/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const colorCombo = getRandomColorCombo()
      document.getElementById("randomQuoteGenerator").style.background =
        "linear-gradient(45deg, #3498db, #e74c3c)";
      const quoteText = data[0].content;
      const quoteAuthor = data[0].author;
      document.getElementById(randomQuoteText).innerHTML = quoteText;
      document.getElementById(randomQuoteAuthor).innerHTML = quoteAuthor;
    })

    .catch((error) => {
      // Handle error here
      alert("There was a problem getting a new quote!");
    });
}
