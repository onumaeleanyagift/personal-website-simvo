import { useState } from "react";
import {
  analyzeStock,
  VerticalAlignContainer,
  VerticalAlignContent,
  DashboardGridContainer,
  DashboardTitle,
  MarginSpace,
  DashboardSubTitle,
  LoadingOvalContainer,
  BackButton,
  AnalyzeInput,
  AnalyzeButton,
  InputContainer,
} from "./stockAnalysisDahboard";
import { Oval } from "react-loader-spinner";
import "./stockAnalysisDashboard.css"
import DashboardGrid from "./dashboardGrid";

function StockAnalysisDashboard() {
  const [stockData, setStockData] = useState<any>(null);
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
      <VerticalAlignContainer>
        <VerticalAlignContent>
          <DashboardGridContainer>
            <DashboardTitle>{stockData.basicInfo.longName}</DashboardTitle>
            <DashboardSubTitle>
              {stockData.basicInfo.sector}
            </DashboardSubTitle>
            <MarginSpace></MarginSpace>
            <BackButton onClick={() => goBack()}>Back</BackButton>
            <div>
              <DashboardGrid stockData={stockData}></DashboardGrid>
            </div>
          </DashboardGridContainer>
        </VerticalAlignContent>
      </VerticalAlignContainer>
    );
  }

  return (
    <VerticalAlignContainer>
      <VerticalAlignContent>
        <div id="stockDashboardInput">
          <div>
            <DashboardTitle id="stockAnalysisDashboardTitle">
              STOCK ANALYSIS DASHBOARD
            </DashboardTitle>
          
            {isLoading ? (
              <LoadingOvalContainer>
                <MarginSpace></MarginSpace>
                <Oval
                  height={50}
                  width={50}
                  color="#ffffff"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#ffffff"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </LoadingOvalContainer>
            ) : (
              <div>
                <DashboardSubTitle id="stockAnalysisDashboardSubtitle">
                  Put in a stock symbol you'd like to analyze (e.g. MSFT)
                </DashboardSubTitle>
                <MarginSpace></MarginSpace>
                <InputContainer>
                  <AnalyzeInput
                    value={stockSymbol}
                    onChange={(e) => setStockSymbol(e.target.value)}
                  ></AnalyzeInput>
                  <AnalyzeButton
                    id="stockAnalysisDashboardButton"
                    onClick={() => runStockAnalysis()}
                  >
                    Analyze
                  </AnalyzeButton>
                </InputContainer>
              </div>
            )}
          </div>
        </div>
      </VerticalAlignContent>
    </VerticalAlignContainer>
  );
}

export default StockAnalysisDashboard;
