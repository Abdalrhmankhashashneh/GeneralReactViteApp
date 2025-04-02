import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import OnHoverWile from "./animateAtoms/onHoverWile";

const ThemeToggleAtom = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <OnHoverWile>

    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:scale-110 transition cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
    </OnHoverWile>

  );
};

export default ThemeToggleAtom;
