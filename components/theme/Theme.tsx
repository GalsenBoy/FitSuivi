import { Moon, Sun } from "lucide-react";
import { useState } from "react";

// type ThemeProps = {
//   className?: string;
// };

export default function Theme() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  const handleTheme = () => {
    if (theme) {
      document.documentElement.style.setProperty("--icone-color", "red");
      document.documentElement.style.setProperty("--text-color", "green");
    } else {
      document.documentElement.style.setProperty("--icone-color", "#246EB9");
      document.documentElement.style.setProperty("--text-color", "#f1f1f1");
    }
  };
  return (
    <span className="cursor-pointer theme" onClick={toggleTheme}>
      {theme ? (
        <Sun onClick={handleTheme} className="text-3xl" />
      ) : (
        <Moon onClick={handleTheme} className="text-3xl" />
      )}
    </span>
  );
}
