"use client";
import Image from "next/image";
import "./topbar.scss";
import { FaMoon, FaSun } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const title = usePathname();
  const today = new Date().toISOString().split("T")[0];

  return (
    <header className="top-bar">
      <div id="top-bar-title">
        <h1 className="text-2xl uppercase">
          {title == "/" ? "Statistiques" : title.replace("/", "")}
        </h1>
        <input type="date" min="2024-01-15" max={today} />
      </div>
      <div id="top-bar-info">
        {" "}
        <span>
          <FaSun className="text-3xl" />
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
