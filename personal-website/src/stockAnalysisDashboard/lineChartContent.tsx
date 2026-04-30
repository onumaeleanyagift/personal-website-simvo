import { PrimaryColor } from "./stockAnalysisDahboard";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
Chart.register(CategoryScale);

function LineChartContent({ priceHistory }: { priceHistory: any }) {
  console.log("priceHistory data:", priceHistory);

  const lineChartData = {
    labels: priceHistory.date,
    datasets: [{
        label: "Price",
        data: priceHistory.price,
        borderColor: PrimaryColor,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  return (
    <Line
      data={lineChartData}
      options={{
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Historical Stock Price"
          },
          legend: {
            display: false
          },
        },
      }}
    />
  );
}

export default LineChartContent;
