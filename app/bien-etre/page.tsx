import "./bien-etre.scss";
import PageCard from "@/components/page-card/PageCard";
export default function BienEtre() {
  const regimes = [
    {
      title: "Surveiller son alimentation",
      image: "/healthy.webp",
    },
    {
      title: "Pratiquer une activité physique régulière",
      image: "/activite.webp",
    },
    {
      title: "Boire de l'eau régulièrement",
      image: "/eau.webp",
    },
    {
      title: "Mieux dormir",
      image: "/dormir.webp",
    },
    {
      title: "Prendre du temps de se détendre",
      image: "/detendre.webp",
    },
    {
      title: "Avoir une attitude positive",
      image: "/positif.webp",
    },
    {
      title: "Eviter le tabac et l'alcool",
      image: "/tabac.webp",
    },
    {
      title: "Limiter le temps d'écran",
      image: "/temps.webp",
    },
    {
      title: "Prendre soin de sa santé mentale",
      image: "/sante.webp",
    },
  ];
  return (
    <section>
      <h1 className="text-center text-3xl">Conseil de bien-être</h1>
      <div id="bien-etre-content" className="grid grid-cols-4">
        {regimes.map((regime, index) => (
          <PageCard
            key={index}
            image={regime.image}
            alt={regime.title}
            padding="p-4"
          >
            <p>{regime.title}</p>
          </PageCard>
        ))}
      </div>
    </section>
  );
}
