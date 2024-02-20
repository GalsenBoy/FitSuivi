import "./navigation.scss";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { FaChartLine, FaHeartPulse } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { SlLogin } from "react-icons/sl";

export default function Navigation() {
  return (
    <nav>
      <div className="flex">
        <a href="">
          <span>
            <FaChartLine />
          </span>{" "}
          Statistiques
        </a>
        <a href="">
          <span>
            <TbTargetArrow />
          </span>
          Objectif
        </a>
        <a href="">
          <span>
            <GiFruitBowl />
          </span>
          Regime
        </a>
        <a href="">
          <span>
            <FaHeartPulse />
          </span>
          Bien être
        </a>
      </div>
      <div>
        <a href="">
          <span>
            <IoMdSettings />
          </span>
          Paramètres
        </a>
        <a href="">
          <span>
            <SlLogin />
          </span>
          Se connecter
        </a>
      </div>
    </nav>
  );
}
