"use client";
import ExerciceChart from "@/components/card/exercise-chart/ExerciceChart";
import SleepChart from "@/components/card/sleep-chart/SleepChart";
import StepsChart from "@/components/card/steps-chart/StepsChart";
import WaterChart from "@/components/card/water-chart/WaterChart";
import Result from "@/components/result/Result";
export default function Home() {
  return (
    <div style={{ gridColumn: "2/-2", padding: "1em" }}>
      <div className="grid grid-cols-4 gap-2 grid-flow-col	">
        <StepsChart />
        <ExerciceChart />
        <SleepChart />
        <WaterChart />
      </div>
      <Result />
    </div>
  );
}
