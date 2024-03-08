import DoughnutChart from "@/components/Doughnut/DoughnutChart";
import ChartCard from "./ChartCard";
import { ChartDialog } from "./chart-dialog/ChartDialog";
import React from "react";
import { Toaster, toast } from "sonner";

export default function WaterChart() {
  const [progressData, setProgressData] = React.useState(0);
  const [inputValue, setInputValue] = React.useState(0);
  const goal = 100;

  const handleWaterChange = (value: string) => {
    setInputValue(+value);
  };
  const handleSave = () => {
    if (inputValue > 0 && typeof inputValue === "number") {
      setProgressData((preWaterData) => preWaterData + inputValue);
      toast.success("Votre consommation d'eau à bien été mis à jour");
    }
  };
  return (
    <div id="chart-card">
      {/* <Toaster richColors position="top-center" /> */}
      <DoughnutChart data={progressData} goal={goal} />
      <ChartCard
        data_one="Consommation d'eau"
        data_two="votre objectif"
        value_one={progressData + " ml"}
        value_two={goal + " ml"}
      />
      <ChartDialog
        onSave={handleSave}
        onChange={handleWaterChange}
        dialogTitle="Ajouter la quantité d'eau consommée"
        btnContent="consommation d'eau"
        label="Quantité d'eau consommée"
        placeholder="Entrez la quantité d'eau consommée en ml"
      />
    </div>
  );
}
