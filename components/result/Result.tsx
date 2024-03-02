import "./result.scss";
import { FaHeartbeat } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";

export default function Result() {
  const results = [
    {
      content: "Calories brûlées",
      value: "156 KCAL",
      icon: <FaFireAlt className="text-3xl icon-result" />,
    },
    {
      content: "Pulsation cardiaque",
      value: "79",
      icon: <FaHeartbeat className="text-3xl icon-result" />,
    },
  ];
  return (
    <section id="result" className=" ">
      <h1 className="">Résultat du jour</h1>
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
