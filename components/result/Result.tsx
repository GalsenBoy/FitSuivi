import { Flame, HeartPulse } from "lucide-react";
import "./result.scss";

export default function Result() {
  const results = [
    {
      content: "Calories brûlées",
      value: "156 KCAL",
      icon: <Flame className="text-3xl icon-result" />,
    },
    {
      content: "Pulsation cardiaque",
      value: "79",
      icon: <HeartPulse className="text-3xl icon-result" />,
    },
  ];
  return (
    <section id="result" className=" ">
      <h1>Résultat du jour</h1>
      <div className="result-content">
        {results.map((result, index) => (
          <div className="flex items-center gap-6 mb-5" key={index}>
            <div className="flex items-center gap-2">
              {result.icon} <p>{result.content}</p>
            </div>
            <span>{result.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
