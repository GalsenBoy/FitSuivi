import DoughnutChart from "@/components/Doughnut/DoughnutChart";
import ChartCard from "./ChartCard";
import { ChartDialog } from "./chart-dialog/ChartDialog";
import React from "react";
import { Toaster, toast } from "sonner";

export default function SleepChart() {
  const [progressData, setProgressData] = React.useState(0);
  const [inputValue, setInputValue] = React.useState(0);
  const goal = 8;

  const handleSleepChange = (value: string) => {
    setInputValue(+value);
  };
  const handleSave = () => {
    if (inputValue > 0 && typeof inputValue === "number") {
      setProgressData((preSleepData) => preSleepData + inputValue);
      toast.success("Votre durée de sommeil à bien été mis à jour");
    }
  };
  return (
    <div id="chart-card">
      <Toaster richColors />
      <DoughnutChart data={progressData} goal={goal} />
      <ChartCard
        data_one="Temps de sommeil"
        data_two="votre objectif"
        value_one={progressData + " H"}
        value_two={goal + " H"}
      />
      <ChartDialog
        onSave={handleSave}
        onChange={handleSleepChange}
        dialogTitle="Ajouter la durée de votre sommeil"
        btnContent="du temps de sommeil"
        label="Durée de sommeil"
        placeholder="Entrez la durée de sommeil en heures"
      />
    </div>
  );
}
