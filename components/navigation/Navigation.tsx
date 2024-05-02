"use client";
import "./navigation.scss";
import { usePathname } from "next/navigation";
import { LogIn, Settings } from "lucide-react";
import { AuthDialog } from "../auth-components/AuthDialog";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigations } from "./navigation-data";
import { Button } from "../ui/button";
import Theme from "../theme/Theme";

export default function Navigation() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [innerW, setInnerW] = useState<boolean>();

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setInnerW(window.innerWidth < 982 ? true : false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside className="relative" style={{ gridRow: "1/2" }}>
      {innerW && (
        <Button className="absolute z-10 top-4 left-2" onClick={handleShow}>
          Burgir
        </Button>
      )}
      <nav id={show ? "navigation" : "isShow"}>
        <div className="flex mt-5" id="nav-items">
          <h1 className="text-2xl mb-6">FitSuivi</h1>
          {navigations.map((nav, index) => (
            <Link
              href={nav.path}
              key={index}
              className={pathname == nav.path ? "isActive" : ""}
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
          <Theme />
        </div>
      </nav>
    </aside>
  );
}
