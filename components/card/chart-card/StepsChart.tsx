import DoughnutChart from "@/components/Doughnut/DoughnutChart";
import ChartCard from "./ChartCard";
import { ChartDialog } from "@/components/card/chart-card/chart-dialog/ChartDialog";

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
      <ChartDialog
        btnContent="Ajouter la distance"
        dialogTitle="Mettez à jour votre distance parcourue"
        label="Distance parcourue"
        placeholder="Entrez la distance parcourue en km"
      />
    </div>
  );
}
