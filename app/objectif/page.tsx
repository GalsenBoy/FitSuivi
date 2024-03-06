/* eslint-disable react/no-unescaped-entities */
import { FaArrowRightLong } from "react-icons/fa6";
import "./objectif.scss";
import { Button } from "@/components/ui/button";
import PageCard from "@/components/page-card/PageCard";
export default function Objectif() {
  const objectifs = [
    {
      title: "Objectif distance",
      image: "/healthy.webp",
    },
    {
      title: "Objectif exercice",
      image: "/activite.webp",
    },
    {
      title: "Objectif eau",
      image: "/eau.webp",
    },
    {
      title: "Objectif sommeil",
      image: "/dormir.webp",
    },
  ];
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
            <Button className="mt-6 uppercase">{objectif.title}</Button>
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
