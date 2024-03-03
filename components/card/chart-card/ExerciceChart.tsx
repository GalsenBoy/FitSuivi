import DoughnutChart from "@/components/Doughnut/DoughnutChart";
import ChartCard from "./ChartCard";
import { ChartDialog } from "./chart-dialog/ChartDialog";

export default function ExerciceChart() {
  return (
    <div id="chart-card">
      <DoughnutChart data={65} goal={100} />
      <ChartCard
        data_one="Temps d'activité"
        data_two="Calories brulées"
        data_three="votre objectif"
      />
      <ChartDialog
        dialogTitle="Mettre à jour votre temps d'exercies"
        btnContent="Temps d'exercies"
        label="temps d'exercice"
        placeholder="Temps d'exercice en minutes"
      />
    </div>
  );
}
