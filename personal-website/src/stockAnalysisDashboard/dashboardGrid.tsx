import React, { useEffect } from "react";
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import { DashboardGridContent } from "./stockAnalysisDahboard";

function DashboardGrid({ stockData }: { stockData: any }) {
  
    useEffect(() => {
    GridStack.init();
  });

  return (
    <div>
      <div className="grid-stack">
        {/* First Row */}
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <div>{stockData.basicInfo.marketCap}</div>
            Market Cap
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <div>{stockData.basicInfo.fullTimeEmployees}</div>
            Employees
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <div>{stockData.basicInfo.totalRevenue}</div>
            Total Revenue
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <div>{stockData.basicInfo.trailingEps}</div>
            Earnings Per Share
          </DashboardGridContent>
        </div>
      </div>
    </div>
  );
}

export default DashboardGrid;
