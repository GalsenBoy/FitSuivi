"use client";
import DoughnutChart from "@/components/Doughnut/DoughnutChart";
export default function Home() {
  const progressData = 65;
  const goal = 100;
  return (
    <div style={{ gridColumn: "2/-2", padding: "1em" }}>
      <div id="chart-card">
        <DoughnutChart data={progressData} goal={goal} />
        <div className="uppercase text-left mt-2 text-sm [&>*]:py-1 [&>p>*]:text-blue-400">
          <p>
            Distance : <span>5.7 km</span>
          </p>
          <p>
            Colorie brulée : <span>100 kcal</span>
          </p>
          <p>
            Votre objectifs : <span>11 km</span>
          </p>
        </div>
      </div>
    </div>
  );
}
