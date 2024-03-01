/* eslint-disable react/no-unescaped-entities */
import { FaArrowRightLong } from "react-icons/fa6";
import "./objectif.scss";
export default function Objectif() {
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
