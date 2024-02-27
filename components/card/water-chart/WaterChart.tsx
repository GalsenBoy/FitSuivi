import DoughnutChart from "@/components/doughnut/DoughnutChart";
import ChartCard from "../chart-card/ChartCard";

export default function WaterChart() {
  return (
    <div id="chart-card">
      <DoughnutChart data={65} goal={100} />
      <ChartCard data_one="Consommation d'eau" data_two="votre objectif" />
    </div>
  );
}
