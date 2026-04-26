import { useState } from "react";
import { analyzeStock } from "./stockAnalysisDahboard";

function StockAnalysisDashboard() {
    const [stockData, setStockData] = useState('123');
    const [stockSymbol, setStockSymbol] = useState('AAAA')

    async function runStockAnalysis() {
      const gotStockData = await analyzeStock(stockSymbol);
      setStockData(gotStockData)
  }


  return (
    <>
      <div>
        <div id="stockAnalysisDashboardTitle">STOCK ANALYSIS DASHBOARD</div>
        <div id="stockAnalysisDashboardSubtitle">
          Put in a stock symbol you'd like to analyze (e.g. MSFT)
        </div>
        <input
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
        ></input>
        <button
          id="stockAnalysisDashboardButton"
          onClick={() => runStockAnalysis()}
        >
          Analyze
        </button>
        <div>{JSON.stringify(stockData)}</div>
      </div>
      {/* <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}
    </>
  );
}

export default StockAnalysisDashboard;
