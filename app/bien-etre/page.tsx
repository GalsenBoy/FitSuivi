import Image from "next/image";
import "./bien-etre.scss";
export default function Regime() {
  const regimes = [
    {
      title: "Surveiller son alimentation",
      image: "/healthy.jpg",
    },
    {
      title: "Pratiquer une activité physique régulière",
      image: "/healthy.jpg",
    },
    {
      title: "Boire de l'eau régulièrement",
      image: "/weight.jpg",
    },
    {
      title: "Mieux dormir",
      image: "/weight.jpg",
    },
    {
      title: "Prendre du temps de se détendre",
      image: "/weight.jpg",
    },
    {
      title: "Avoir une attitude positive",
      image: "/weight.jpg",
    },
    {
      title: "Eviter le tabac et l'alcool",
      image: "/weight.jpg",
    },
    {
      title: "Limiter le temps d'écran",
      image: "/weight.jpg",
    },
    {
      title: "Prendre soin de sa santé mentale",
      image: "/weight.jpg",
    },
  ];
  return (
    <section>
      <h1 className="text-center text-3xl">Conseil de bien-être</h1>
      <div id="bien-etre-content" className="grid grid-cols-4">
        {regimes.map((regime, index) => (
          <div key={index} id="bien-etre">
            <Image
              className=""
              src={regime.image}
              alt={regime.title}
              width={200}
              height={200}
            />
            <p>{regime.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
