/* eslint-disable react/no-unescaped-entities */
"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import "./objectif.scss";
import PageCard from "@/components/page-card/PageCard";
import { ChartDialog } from "@/components/card/chart-card/chart-dialog/ChartDialog";
import { Label } from "@radix-ui/react-label";

export default function Objectif() {
  const objectifs = [
    {
      title: "Objectif distance",
      image: "/healthy.webp",
      placeholder: "Entrez la distance en km",
      dialogTitle: "Mis à jour objectif distance",
    },
    {
      title: "Objectif exercice",
      image: "/activite.webp",
      placeholder: "Entrez le temps d'exercice en minutes",
      dialogTitle: "Mis à jour objectif exercice",
    },
    {
      title: "Objectif eau",
      image: "/eau.webp",
      placeholder: "Entrez la quantité d'eau en ml",
      dialogTitle: "Mis à jour objectif eau",
    },
    {
      title: "Objectif sommeil",
      image: "/dormir.webp",
      placeholder: "Entrez le temps de sommeil en heures",
      dialogTitle: "Mis à jour objectif sommeil",
    },
  ];

  const handleInput = (value: string) => {
    console.log(+value + " is updated");
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
      <div className="grid grid-cols-4 gap-2 grid-flow-col mb-7">
        {objectifs.map((objectif, index) => (
          <PageCard
            key={index}
            image={objectif.image}
            alt={objectif.title}
            padding="p-4"
          >
            <ChartDialog
              btnContent={objectif.title}
              label={objectif.title}
              placeholder={objectif.placeholder}
              dialogTitle={objectif.dialogTitle}
              onChange={handleInput}
            />
          </PageCard>
        ))}
      </div>
      <div className="grid grid-cols-3 items-center mt-7">
        <div>
          <h2>88 KG</h2>
          <p>Votre poids actuels</p>
        </div>
        <FaArrowRightLong id="fa-arrow" />
        <div>
          <h2>75 KG</h2>
          <p>Poids à atteindre</p>
        </div>
      </div>
    </section>
  );
}
