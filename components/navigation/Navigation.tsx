"use client";
import "./navigation.scss";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { FaChartLine, FaHeartPulse } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { SlLogin } from "react-icons/sl";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const navigations = [
    {
      label: "Statistiques",
      icon: <FaChartLine />,
      path: "/",
    },
    {
      label: "Objectif",
      icon: <TbTargetArrow />,
      path: "/objectif",
    },
    {
      label: "Regime",
      icon: <GiFruitBowl />,
      path: "/regime",
    },
    {
      label: "Bien être",
      icon: <FaHeartPulse />,
      path: "/bien-etre",
    },
  ];
  const navLogins = [
    {
      label: "Paramètres",
      icon: <IoMdSettings />,
      path: "/parametres",
    },
    {
      label: "Se connecter",
      icon: <SlLogin />,
      path: "/connexion",
    },
  ];
  return (
    <aside style={{ gridRow: "1/2" }}>
      <nav id="navigation">
        <div className="flex mt-5" id="nav-items">
          <h1 className="text-2xl mb-6">FitSuivi</h1>
          {navigations.map((nav, index) => (
            <a
              href={nav.path}
              key={index}
              className={pathname == nav.path ? "isActive" : ""}
            >
              <span>{nav.icon}</span>
              {nav.label}
            </a>
          ))}
        </div>
        <div id="nav-login" className="pb-4">
          {navLogins.map((nav, index) => (
            <a
              href={nav.path}
              key={index}
              className={pathname == nav.path ? "isActive" : ""}
            >
              <span>{nav.icon}</span>
              {nav.label}
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}
