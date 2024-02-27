import Image from "next/image";
// import { Calendar } from "@/components/ui/calendar";

import "./topbar.scss";
import { FaMoon } from "react-icons/fa";

export default function TopBar() {
  return (
    <header className="top-bar">
      <div id="top-bar-title">
        <h1 className="text-2xl">STATISTIQUES</h1>
        <input type="date" />
      </div>
      <div id="top-bar-info">
        {" "}
        <span>
          <FaMoon />
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
