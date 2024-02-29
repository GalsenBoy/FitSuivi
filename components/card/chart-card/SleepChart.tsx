import DoughnutChart from "@/components/doughnut/DoughnutChart";
import ChartCard from "./ChartCard";

export default function SleepChart() {
  return (
    <div id="chart-card">
      <DoughnutChart data={65} goal={100} />
      <ChartCard data_one="Temps de sommeil" data_two="votre objectif" />
    </div>
  );
}
