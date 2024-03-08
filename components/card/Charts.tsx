import ExerciceChart from "./chart-card/ExerciceChart";
import SleepChart from "./chart-card/SleepChart";
import StepsChart from "./chart-card/StepsChart";
import WaterChart from "./chart-card/WaterChart";

export default function Charts() {
  return (
    <div className="grid grid-cols-4 gap-2 ">
      <StepsChart />
      <ExerciceChart />
      <SleepChart />
      <WaterChart />
    </div>
  );
}
