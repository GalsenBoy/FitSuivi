// DoughnutChart.tsx
import { useEffect, useRef } from "react";
import Chart from "chart.js";

interface DoughnutChartProps {
  data: number;
  goal: number;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, goal }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const remaining = goal - data;
        const chartData = {
          labels: ["Progress", "Remaining"],
          datasets: [
            {
              data: [data, remaining > 0 ? remaining : 0],
              backgroundColor: ["#36A2EB", "#d3d3d3"],
            },
          ],
        };

        new Chart(ctx, {
          type: "doughnut",
          data: chartData,
          options: {
            cutoutPercentage: 80,
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    }
  }, [data, goal]);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
