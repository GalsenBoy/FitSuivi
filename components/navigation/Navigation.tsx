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
import Link from "next/link";

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

  console.log("====================================");
  console.log(pathname.substring(1, 5));
  console.log("====================================");

  return (
    <aside style={{ gridRow: "1/2" }}>
      <nav id="navigation">
        <div className="flex mt-5" id="nav-items">
          <h1 className="text-2xl mb-6">FitSuivi</h1>
          {navigations.map((nav, index) => (
            <Link
              href={nav.path}
              key={index}
              className={
                pathname == nav.path ||
                pathname.substring(1, 5).includes(nav.path)
                  ? "isActive"
                  : ""
              }
            >
              <span>{nav.icon}</span>
              {nav.label}
            </Link>
          ))}
        </div>
        <div id="nav-login" className="pb-4">
          <Link
            href="/parametres"
            className={pathname == "/parametres" ? "isActive" : ""}
          >
            <span>
              <Settings />
            </span>
            Parametres
          </Link>
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
