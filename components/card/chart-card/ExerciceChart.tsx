import DoughnutChart from "@/components/Doughnut/DoughnutChart";
import ChartCard from "./ChartCard";
import { ChartDialog } from "./chart-dialog/ChartDialog";
import React from "react";
import { Toaster, toast } from "sonner";

export default function ExerciceChart() {
  const [progressData, setProgressData] = React.useState(0);
  const [inputValue, setInputValue] = React.useState(0);
  const goal = 2;

  const handleExerciceChange = (value: string) => {
    setInputValue(+value);
  };
  const handleSave = () => {
    if (inputValue > 0 && typeof inputValue === "number") {
      setProgressData((preExerciceData) => preExerciceData + inputValue);
      toast.success("Votre temps d'exercice à bien été mis à jour");
    }
  };
  return (
    <div id="chart-card">
      <Toaster richColors />
      <DoughnutChart data={progressData / 60} goal={goal} />
      <ChartCard
        data_one="Temps d'activité"
        data_two="Calories brulées"
        data_three="votre objectif"
        value_one={progressData + " min"}
        value_two={progressData * 100 + " cal"}
        value_three={goal + " h"}
      />
      <ChartDialog
        onSave={handleSave}
        onChange={handleExerciceChange}
        dialogTitle="Mettre à jour votre temps d'exercies"
        btnContent="temps d'exercices"
        label="temps d'exercice"
        placeholder="Temps d'exercice en minutes"
      />
    </div>
  );
}
