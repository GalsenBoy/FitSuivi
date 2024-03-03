import DoughnutChart from "@/components/Doughnut/DoughnutChart";
import ChartCard from "./ChartCard";
import { ChartDialog } from "./chart-dialog/ChartDialog";

export default function WaterChart() {
  return (
    <div id="chart-card">
      <DoughnutChart data={65} goal={100} />
      <ChartCard data_one="Consommation d'eau" data_two="votre objectif" />
      <ChartDialog
        dialogTitle="Ajouter la quantité d'eau consommée"
        btnContent="Ajouter l'eau"
        label="Quantité d'eau consommée"
        placeholder="Entrez la quantité d'eau consommée en ml"
      />
    </div>
  );
}
