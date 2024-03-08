"use client";
import "./navigation.scss";
import { usePathname } from "next/navigation";
import {
  BarChart4,
  Goal,
  HeartPulse,
  LogIn,
  Salad,
  Settings,
} from "lucide-react";
import { AuthDialog } from "../auth-components/AuthDialog";

export default function Navigation() {
  const pathname = usePathname();
  const navigations = [
    {
      label: "Statistiques",
      icon: <BarChart4 />,
      path: "/",
    },
    {
      label: "Regime",
      icon: <Salad />,
      path: "/regime",
    },
    {
      label: "Bien être",
      icon: <HeartPulse />,
      path: "/bien-etre",
    },
    {
      label: "Objectifs",
      icon: <Goal />,
      path: "/objectifs",
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
          <a
            href="/parametres"
            className={pathname == "/parametres" ? "isActive" : ""}
          >
            <span>
              <Settings />
            </span>
            Parametres
          </a>
          <div className="btn-cl">
            <span>
              <LogIn />
            </span>{" "}
            <AuthDialog />
          </div>
        </div>
      </nav>
    </aside>
  );
}
