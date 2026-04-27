import { useState } from "react";
import { analyzeStock } from "./stockAnalysisDahboard";
import { Oval } from "react-loader-spinner";

function StockAnalysisDashboard() {
  const [stockData, setStockData] = useState("123");
  const [stockSymbol, setStockSymbol] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gotData, setGotData] = useState(false);

  function goBack() {
    setGotData(false);
    setIsLoading(false);
  }

  async function runStockAnalysis() {
    setIsLoading(true);
    const gotStockData = await analyzeStock(stockSymbol);
    if (gotStockData) {
      setStockData(gotStockData);
      setGotData(true);
      setIsLoading(false);
    } else {
      goBack();
    }
  }

  if (gotData) {
    return (
      <div>
        <div onClick={() => goBack()}>Back</div>
        <div>{JSON.stringify(stockData)}</div>
      </div>
    );
  }

  return (
    <>
      <div>
        <div id="stockAnalysisDashboardTitle">STOCK ANALYSIS DASHBOARD</div>
        {isLoading ? (
          <div>
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          <div>
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
          </div>
        )}
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
