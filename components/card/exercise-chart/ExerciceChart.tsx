import DoughnutChart from "@/components/doughnut/DoughnutChart";
import ChartCard from "../chart-card/ChartCard";

export default function ExerciceChart() {
  return (
    <div id="chart-card">
      <DoughnutChart data={65} goal={100} />
      <ChartCard
        data_one="Temps d'activité"
        data_two="Calories brulées"
        data_three="votre objectif"
      />
    </div>
  );
}
