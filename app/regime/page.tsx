import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./regime.scss";

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
      <div className=" grid grid-cols-3">
        {regimes.map((regime, index) => (
          <div key={index} id="regime-card">
            <Image
              className=""
              src={regime.image}
              alt={regime.title}
              width={200}
              height={200}
            />
            <Button className="mt-6 uppercase">{regime.title}</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
