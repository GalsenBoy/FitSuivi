import DoughnutChart from "@/components/Doughnut/DoughnutChart";
import ChartCard from "./ChartCard";
import { ChartDialog } from "@/components/card/chart-card/chart-dialog/ChartDialog";
import React from "react";

export default function StepsChart() {
  const [progressData, setProgressData] = React.useState<number>(0);
  const [inputValue, setInputValue] = React.useState<number>(0);
  const goal = 12;

  const handleStepsChange = (value: string) => {
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
        value_one={progressData + " km"}
        value_two={progressData * 100 + " cal"}
        value_three={goal + " km"}
        data_one="Distance"
        data_two="Calories brulées"
        data_three="votre objectif"
      />
      <ChartDialog
        onSave={handleSave}
        btnContent="de la distance"
        dialogTitle="Mettez à jour votre distance parcourue"
        label="Distance parcourue"
        placeholder="Entrez la distance parcourue en km"
        onChange={handleStepsChange}
      />
    </div>
  );
}
