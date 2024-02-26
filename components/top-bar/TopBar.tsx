"use client";
import Image from "next/image";
import "./topbar.scss";
import { FaMoon } from "react-icons/fa";
import DoughnutChart from "../Doughnut/DoughnutChart";

export default function TopBar() {
  const progressData = 30; // Mettez ici la donnée de la progression
  const goal = 100;
  return (
    <>
      <nav className="top-bar">
        <div id="top-bar-title">
          <h1 className="text-2xl">STATISTIQUES</h1>
          <input type="date" />
        </div>
        <div id="top-bar-info">
          {" "}
          <span>
            <FaMoon />
          </span>
          <Image
            src="/hijab.jpg"
            alt=""
            width={75}
            height={75}
            objectFit="contain"
            style={{
              color: "white",
              width: 50,
              height: 50,
              objectFit: "cover",
              borderRadius: "50%",
            }}
            quality={100}
          />
        </div>
      </nav>{" "}
      <DoughnutChart data={progressData} goal={goal} />
    </>
  );
}
