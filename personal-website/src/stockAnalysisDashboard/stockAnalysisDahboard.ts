export async function analyzeStock(stockSymbolToAnalyze: string) {

  if (stockSymbolToAnalyze.length == 0) {
    alert("You must put in a ticker symbol before runnig the analysis");
    return;
  }
  const url = "http://127.0.0.1:5000/analyze-stock/" + stockSymbolToAnalyze;

  console.log("Running");
  const response = await fetch(url);
  if (!response.ok) {
    alert("There was a problem getting the analyis for your stock!");
  }
  const data = await response.json();
  return data;
}
