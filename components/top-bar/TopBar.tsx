import Image from "next/image";
import "./topbar.scss";
import { FaMoon } from "react-icons/fa";
export default function TopBar() {
  return (
    <nav className="top-bar">
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
          objectFit="contain"
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
    </nav>
  );
}
