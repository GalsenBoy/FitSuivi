import { Button } from "@/components/ui/button";
import PageCard from "@/components/page-card/PageCard";

export default function Regime() {
  const regimes = [
    {
      title: "Perdre du poids",
      image: "/healthy.webp",
    },
    {
      title: "Garder la forme",
      image: "/forme.webp",
    },
    {
      title: "Prendre du poids",
      image: "/weight.webp",
    },
  ];
  return (
    <section>
      <h1 className="text-center text-3xl">
        Veuillez chosir votre type de regime
      </h1>
      <div className="flexCardAround">
        {regimes.map((regime, index) => (
          <PageCard
            key={index}
            image={regime.image}
            alt={regime.title}
            padding="p-8"
          >
            <Button
              style={{ background: "var(--icone-color)" }}
              className="mt-6 uppercase"
            >
              {regime.title}
            </Button>{" "}
          </PageCard>
        ))}
      </div>
    </section>
  );
}
