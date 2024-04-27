import Link from "next/link";
import { regimes } from "./bien-etre";
import "./bien-etre.scss";
import PageCard from "@/components/page-card/PageCard";
export default function BienEtre() {
  return (
    <section>
      <h1 className="text-center text-3xl">Conseil de bien-être</h1>
      <div id="bien-etre-content" className="flexCardAround">
        {regimes.map((regime, index) => (
          <PageCard
            key={index}
            image={regime.image}
            alt={regime.title}
            padding="p-4"
          >
            <Link href={regime.url}>
              <p>{regime.title}</p>
            </Link>
          </PageCard>
        ))}
      </div>
    </section>
  );
}
