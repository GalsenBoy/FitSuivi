"use client";
import Charts from "@/components/card/Charts";
import ExerciceChart from "@/components/card/chart-card/ExerciceChart";
import SleepChart from "@/components/card/chart-card/SleepChart";
import StepsChart from "@/components/card/chart-card/StepsChart";
import WaterChart from "@/components/card/chart-card/WaterChart";
import LongTermResult from "@/components/result/LongTermResult";
import Result from "@/components/result/Result";
export default function Home() {
  return (
    <div>
      <Charts />
      <Result />
      <LongTermResult />
    </div>
  );
}
