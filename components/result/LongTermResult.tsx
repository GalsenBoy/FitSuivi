/* eslint-disable react/no-unescaped-entities */
import "./long-term-result.scss";
import { Bed, Flame, Footprints, GlassWaterIcon } from "lucide-react";

export default function LongTermResult() {
  return (
    <section id="long-term-result" className=" ">
      <div className="flexCardBetween gap-6">
        <div id="long-term-card">
          <h2 className="mb-3">Résultats de la semaine dernière</h2>
          <p>
            <span>
              <Footprints />
            </span>
            Distances parcourues : 17km
          </p>
          <p>
            <span>
              <Bed />
            </span>
            Temps de sommeils : 56h
          </p>
          <p>
            <span>
              <GlassWaterIcon />
            </span>
            Consommations d'eau : 10L
          </p>
          <p>
            <span>
              <Flame />
            </span>
            Nombres de calories brulées : 5000KCAL
          </p>
        </div>
        <div id="long-term-card">
          <h2 className="mb-3">Votre résultats mensuel</h2>
          <p>
            <span>
              <Footprints />
            </span>
            Distances parcourues : 17km
          </p>
          <p>
            <span>
              <Bed />
            </span>
            Temps de sommeils : 56h
          </p>
          <p>
            <span>
              <GlassWaterIcon />
            </span>
            Consommations d'eau : 10L
          </p>
          <p>
            <span>
              <Flame />
            </span>
            Nombres de calories brulées : 5000KCAL
          </p>
        </div>
        <div id="long-term-card">
          <h2 className="mb-3">Votre résultats annuel</h2>
          <p>
            <span>
              <Footprints />
            </span>
            Distances parcourues : 17km
          </p>
          <p>
            <span>
              <Bed />
            </span>
            Temps de sommeils : 56h
          </p>
          <p>
            <span>
              <GlassWaterIcon />
            </span>
            Consommations d'eau : 10L
          </p>
          <p>
            <span>
              <Flame />
            </span>
            Nombres de calories brulées : 5000 KCAL
          </p>
        </div>
      </div>
    </section>
  );
}
