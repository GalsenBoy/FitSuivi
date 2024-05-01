/* eslint-disable react/no-unescaped-entities */
"use client";
import "./objectif.scss";
import PageCard from "@/components/page-card/PageCard";
import { ChartDialog } from "@/components/card/chart-card/chart-dialog/ChartDialog";
import React from "react";
import { useObjectifStore } from "@/stores/objectif-store";
import { MoveRight } from "lucide-react";
import { objectifs } from "./objectif";

export default function Objectif() {
  const { setDistance, setExercice, setWater, setSleep } = useObjectifStore();

  const poids = 88;
  const poidsObjectif = 75;

  const handleInput = (value: string, objectif: { dialogTitle: string }) => {
    const valueNumber = parseInt(value);
    if (valueNumber > 0) {
      if (objectif.dialogTitle === "Mis à jour objectif distance") {
        setDistance(valueNumber);
        console.log("distance", valueNumber);
      }
      if (objectif.dialogTitle === "Mis à jour objectif exercice") {
        setExercice(valueNumber);
        console.log("exercice", valueNumber);
      }
      if (objectif.dialogTitle === "Mis à jour objectif eau") {
        setWater(valueNumber);
        console.log("eau", valueNumber);
      }
      if (objectif.dialogTitle === "Mis à jour objectif sommeil") {
        setSleep(valueNumber);
        console.log("sommeil", valueNumber);
      }
    }
  };
  return (
    <section id="objectif" className=" ">
      <h1>
        L'objectif de FitSuivi est de vous aider à atteindre vos objectifs
        personnels de bien-être et de santé. Nous vous aidons à atteindre vos
        objectifs en vous fournissant des outils pour surveiller votre
        alimentation, pratiquer une activité physique régulière, boire de l'eau
        régulièrement, mieux dormir, prendre du temps pour vous détendre, avoir
        une attitude positive, éviter le tabac et l'alcool, limiter le temps
        d'écran, et prendre soin de votre santé mentale.
      </h1>
      <div className="flexCardBetween gap-6 mb-12">
        {objectifs.map((objectif, index) => (
          <PageCard
            key={index}
            image={objectif.image}
            alt={objectif.title}
            padding="p-4"
          >
            <div id="chart-card">
              <ChartDialog
                btnContent={objectif.title}
                label={objectif.title}
                placeholder={objectif.placeholder}
                dialogTitle={objectif.dialogTitle}
                onChange={(value) => handleInput(value, objectif)}
              />
            </div>
          </PageCard>
        ))}
      </div>
      <div className="flexCardAround items-center mt-7">
        <div>
          <h2
            className={
              poids > poidsObjectif ? "text-red-500" : "text-green-500"
            }
          >
            {poids} KG
          </h2>
          <p>Votre poids actuels</p>
        </div>
        <MoveRight size={48} />
        <div>
          <h2>{poidsObjectif} KG</h2>
          <p>Poids à atteindre</p>
        </div>
      </div>
    </section>
  );
}
