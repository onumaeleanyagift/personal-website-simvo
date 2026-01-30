function getNewRandomQuote() {
  console.log('Function called');
  fetch('https://api.quotable.io/random')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Do something with the recieved data
        console.log('Quote data:', data);
        const quoteText = data[0].content
        const quoteAuthor = data[0].author;
        document.getElementById("randomQuoteText").innerHTML = quoteText;
        document.getElementById("randomQuoteAuthor").innerHTML = quoteAuthor;
    })

    .catch((error) => {
      // Handle error here
      alert('There was a problem getting a new quote!')
    });
}
