import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";

interface DoughnutChartProps {
  data: number;
  goal: number;
}

ChartJS.register(ArcElement);

const DoughnutChart = ({ data, goal }: DoughnutChartProps) => {
  const remaining = goal - data;
  const chartData = {
    labels: ["Progression", "Reste à faire"],
    datasets: [
      {
        data: [data, remaining > 0 ? remaining : 0],
        backgroundColor: ["#246EB9", "#d3d3d3"],
        borderWidth: 0,
        weight: 50,
      },
    ],
  };

  const options = {
    aspectRatio: 1,
    cutoutPercentage: 80,
    responsive: true,
    // maintainAspectRatio: false,
  };

  return (
    <div style={{ width: 100, height: 100 }}>
      <Doughnut className="" data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChart;
