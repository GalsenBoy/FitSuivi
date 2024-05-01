"use client";
import Image from "next/image";
import "./topbar.scss";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function TopBar() {
  const title = usePathname();
  const today = new Date().toISOString().split("T")[0];
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <header className="top-bar">
      <div id="top-bar-title">
        <h1 className="text-3xl uppercase">
          {title == "/" ? "Statistiques" : title.replace("/", "")}
        </h1>
        <input type="date" min="2024-01-15" max={today} />
      </div>
      <div id="top-bar-info">
        {" "}
        <span className=" cursor-pointer" onClick={toggleTheme}>
          {theme ? <Sun className="text-3xl" /> : <Moon className="text-3xl" />}
        </span>
        <Image
          src="/hijab.jpg"
          alt=""
          width={75}
          height={75}
          style={{
            color: "white",
            width: 50,
            height: 50,
            objectFit: "cover",
            borderRadius: "50%",
          }}
          quality={100}
        />
      </div>
    </header>
  );
}
