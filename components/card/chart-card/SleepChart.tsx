import DoughnutChart from "@/components/Doughnut/DoughnutChart";
import ChartCard from "./ChartCard";
import { ChartDialog } from "./chart-dialog/ChartDialog";

export default function SleepChart() {
  return (
    <div id="chart-card">
      <DoughnutChart data={65} goal={100} />
      <ChartCard data_one="Temps de sommeil" data_two="votre objectif" />
      <ChartDialog
        dialogTitle="Ajouter la durée de votre sommeil"
        btnContent="Ajouter le sommeil"
        label="Durée de sommeil"
        placeholder="Entrez la durée de sommeil en heures"
      />
    </div>
  );
}
