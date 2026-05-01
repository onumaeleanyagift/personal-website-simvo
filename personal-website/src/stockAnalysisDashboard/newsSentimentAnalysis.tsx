import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import NumberStat from "./numberStat";
import {
  VerticalAlignContainer,
    VerticalAlignContent,
    ThemeGreen,
    ThemeRed,
    ThemeGrey
} from "./stockAnalysisDahboard";

ChartJS.register(ArcElement, Tooltip, Legend);

type NewsTextAnalysis = {
  positive: number;
  negative: number;
  neutral: number;
  metadata: any;
  data: any;
};

type SentimentChartProps = {
  newsTextAnalysis: NewsTextAnalysis;
};

export default function SentimentChart({
  newsTextAnalysis,
}: SentimentChartProps) {
  const sentiment = newsTextAnalysis.data.sentiment;

  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "Sentiment",
        data: [sentiment.pos, sentiment.neg, sentiment.neu],
        backgroundColor: [ThemeGreen, ThemeRed, ThemeGrey],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            size: 10,
          },
          boxWidth: 20,
          padding: 10,
        },
      },
    },
  };

  return (
    <Wrapper>
      <ChartContainer>
        <div>
          <Doughnut data={data} options={options} />
        </div>
      </ChartContainer>

      <VerticalAlignContainer>
        <VerticalAlignContent>
          <div>News Text Analysis</div>
          <div style={{ height: "15px" }}></div>
          <div>
            <NumberStat
              value={newsTextAnalysis.metadata.snetencesAnalyzed}
              label={"Sentences analyzed"}
            ></NumberStat>
          </div>

          <div style={{ marginTop: "15px" }}>
            <NumberStat
              value={newsTextAnalysis.metadata.wordsAnalyzed}
              label={"Words analyzed"}
            ></NumberStat>
          </div>
        </VerticalAlignContent>
      </VerticalAlignContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
