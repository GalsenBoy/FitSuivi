"use client";
import ExerciceChart from "@/components/card/chart-card/ExerciceChart";
import SleepChart from "@/components/card/chart-card/SleepChart";
import StepsChart from "@/components/card/chart-card/StepsChart";
import WaterChart from "@/components/card/chart-card/WaterChart";
import Result from "@/components/result/Result";
export default function Home() {
  return (
    <div>
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
