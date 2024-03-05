import DoughnutChart from "@/components/Doughnut/DoughnutChart";
import ChartCard from "./ChartCard";
import { ChartDialog } from "./chart-dialog/ChartDialog";
import React from "react";

export default function ExerciceChart() {
  const [progressData, setProgressData] = React.useState(0);
  const [inputValue, setInputValue] = React.useState(0);
  const goal = 100;

  const handleExerciceChange = (value: string) => {
    setInputValue(+value);
  };
  const handleSave = () => {
    if (inputValue > 0 && typeof inputValue === "number") {
      setProgressData(progressData + inputValue);
    }
  };
  return (
    <div id="chart-card">
      <DoughnutChart data={progressData} goal={goal} />
      <ChartCard
        data_one="Temps d'activité"
        data_two="Calories brulées"
        data_three="votre objectif"
        value_one={progressData + " min"}
        value_two={progressData * 100 + " cal"}
        value_three={goal + " min"}
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
