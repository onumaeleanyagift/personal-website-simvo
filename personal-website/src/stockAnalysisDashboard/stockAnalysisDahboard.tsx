// import { useState } from "react";

function StockAnalysisDashboard() {
  async function runStockAnalysis() {
    alert("Function called");
  }

  //   const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div id="stockAnalysisDashboardTitle">STOCK ANALYSIS DASHBOARD</div>
        <div id="stockAnalysisDashboardSubtitle">
          Put in a stock symbol you'd like to analyze (e.g. MSFT)
        </div>
        <input id="stockAnalysisDashboardInput"></input>
        <button
          id="stockAnalysisDashboardButton"
          onClick={() => runStockAnalysis()}
        >
          Analyze
        </button>
        <div id="stockAnalysisDahboardData"></div>
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
