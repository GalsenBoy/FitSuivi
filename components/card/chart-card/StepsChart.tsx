import DoughnutChart from "@/components/Doughnut/DoughnutChart";
import ChartCard from "./ChartCard";

export default function StepsChart() {
  const progressData = 65;
  const goal = 100;
  return (
    <div id="chart-card">
      <DoughnutChart data={progressData} goal={goal} />
      <ChartCard
        data_one="Distance"
        data_two="Calories brulées"
        data_three="votre objectif"
      />
    </div>
  );
}
