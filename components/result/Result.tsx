import "./result.scss";
import { FaHeartbeat } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";

export default function Result() {
  const results = [
    {
      value: "156 Kcal",
      icon: <FaFireAlt className="text-3xl icon-result" />,
    },
    {
      value: "79",
      icon: <FaHeartbeat className="text-3xl icon-result" />,
    },
  ];
  return (
    <section id="result" className=" ">
      <h1 className="">Résultat</h1>
      <div className="result-content">
        <div>
          <p>Calories</p>
          <p>Palitations</p>
        </div>
        <div>
          {results.map((result, index) => (
            <div key={index} className="flex items-center gap-2">
              {result.icon}
              <span>{result.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
