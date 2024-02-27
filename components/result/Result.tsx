import "./result.scss";
import { FaHeartbeat } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";

export default function Result() {
  const results = [
    {
      name: "Calories",
      value: "156 Kcal",
      icon: <FaFireAlt className="text-3xl text-blue-400" />,
    },
    {
      name: "Pulpation",
      value: "79",
      icon: <FaHeartbeat className="text-3xl text-blue-400" />,
    },
  ];
  return (
    <section id="result" className=" ">
      <h1 className="">Résultat</h1>
      {results.map((result, index) => (
        <div className="result-content" key={index}>
          <p>{result.name}</p>
          <div className="result-value">
            {result.icon} <span>{result.value}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
