/* eslint-disable react/no-unescaped-entities */
import "./long-term-result.scss";
import { FaRunning } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";

export default function LongTermResult() {
  return (
    <section id="long-term-result" className=" ">
      <div className="grid grid-cols-3">
        <div id="long-term-card">
          <h2 className="mb-3">Résultats de la semaine dernière</h2>
          <p>
            <span>
              <FaRunning />
            </span>
            Distances parcourues : 17km
          </p>
          <p>
            <span>
              <GiNightSleep />
            </span>
            Temps de sommeils : 56h
          </p>
          <p>
            <span>
              <IoIosWater />
            </span>
            Consommations d'eau : 10L
          </p>
          <p>
            <span>
              <FaFireAlt />
            </span>
            Nombres de calories brulées : 5000KCAL
          </p>
        </div>
        <div id="long-term-card">
          <h2 className="mb-3">Votre résultats mensuel</h2>
          <p>
            <span>
              <FaRunning />
            </span>
            Distances parcourues : 17km
          </p>
          <p>
            <span>
              <GiNightSleep />
            </span>
            Temps de sommeils : 56h
          </p>
          <p>
            <span>
              <IoIosWater />
            </span>
            Consommations d'eau : 10L
          </p>
          <p>
            <span>
              <FaFireAlt />
            </span>
            Nombres de calories brulées : 5000KCAL
          </p>
        </div>
        <div id="long-term-card">
          <h2 className="mb-3">Votre résultats annuel</h2>
          <p>
            <span>
              <FaRunning />
            </span>
            Distances parcourues : 17km
          </p>
          <p>
            <span>
              <GiNightSleep />
            </span>
            Temps de sommeils : 56h
          </p>
          <p>
            <span>
              <IoIosWater />
            </span>
            Consommations d'eau : 10L
          </p>
          <p>
            <span>
              <FaFireAlt />
            </span>
            Nombres de calories brulées : 5000 KCAL
          </p>
        </div>
      </div>
    </section>
  );
}
